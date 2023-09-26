'use client';

import { useIsBreakpointUp } from '@/lib/hooks/use-is-breakpoint-up';
import { Button, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { GrClose } from 'react-icons/gr';
import { TProps } from './types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { useCallback, useEffect } from 'react';
import { localStorageService } from '@/services';
import { thunks } from '@/store/thunks/search-filters';
import { FilterLanguages } from '../FilterLanguages';
import { FilterCountries } from '../FilterCountries';
import Link from 'next/link';
import { urls } from '@/urls';
import { buildUrl } from '@/lib/utils/build-url';
import { TSearchParams } from '@/app/(public)/search/types';

const FilterSidebar: React.FC<TProps> = (props) => {
  const { ...other } = props;
  const lgUp = useIsBreakpointUp('lg');
  const stateSearchFilters = useAppSelector((state) => state.searchFilters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const restoredOpenSidebar = localStorageService.getValueFromSettings('filterSidebarIsOpen') ?? true;
    dispatch(thunks.setSidebarIsOpen(lgUp && restoredOpenSidebar));
  }, [dispatch, lgUp]);

  const handleFiltersToggle = () => {
    const sidebarIsOpen = !stateSearchFilters.sidebarIsOpen;
    dispatch(thunks.setSidebarIsOpen(sidebarIsOpen));
    localStorageService.updateValueInSettings('filterSidebarIsOpen', sidebarIsOpen);
  };

  const handleResetFilters = () => {
    dispatch(thunks.resetAllFilters());
  };

  const buildSearchUrl = useCallback(() => {
    const query: TSearchParams = {};
    if (stateSearchFilters.learningLanguages.length > 0) {
      query.learning = encodeURIComponent(JSON.stringify(stateSearchFilters.learningLanguages));
    }
    if (stateSearchFilters.speaksLanguages.length > 0) {
      query.speaks = encodeURIComponent(JSON.stringify(stateSearchFilters.speaksLanguages));
    }
    if (stateSearchFilters.countries.length > 0) {
      query.countries = encodeURIComponent(JSON.stringify(stateSearchFilters.countries));
    }
    return buildUrl(urls.search, { query });
  }, [stateSearchFilters]);

  const content = (
    <>
      <Stack alignItems="center" justifyContent="space-between" direction="row" sx={{ p: 3 }}>
        <Typography variant="h5">Filters</Typography>
        {!lgUp && (
          <IconButton onClick={handleFiltersToggle}>
            <GrClose />
          </IconButton>
        )}
      </Stack>
      <Stack spacing={3} sx={{ p: 3 }}>
        <FilterLanguages title="Speaks languages:" storeLanguageKey="speaksLanguages" />
        <FilterLanguages title="Learning languages:" storeLanguageKey="learningLanguages" />
        <FilterCountries />
        <Button component={Link} href={buildSearchUrl()} variant="contained">
          Search
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleResetFilters}>
          Reset
        </Button>
      </Stack>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open={stateSearchFilters.sidebarIsOpen}
        PaperProps={{
          elevation: 16,
          sx: {
            border: 'none',
            borderRadius: 2.5,
            overflow: 'hidden',
            position: 'relative',
          },
        }}
        variant="persistent"
        sx={{ width: 380, zIndex: 1 }}
        {...other}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      hideBackdrop
      ModalProps={{
        sx: {
          pointerEvents: 'none',
          position: 'absolute',
        },
      }}
      onClose={handleFiltersToggle}
      open={stateSearchFilters.sidebarIsOpen}
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: '100%',
          pointerEvents: 'auto',
          position: 'absolute',
        },
      }}
      variant="temporary"
      {...other}
    >
      {content}
    </Drawer>
  );
};

export default FilterSidebar;
