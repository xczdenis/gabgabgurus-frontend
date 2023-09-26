'use client';

import { Button, Stack, Typography } from '@mui/material';
import { BsFilterSquare } from 'react-icons/bs';
import { IoFilterSharp } from 'react-icons/io5';
import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { localStorageService } from '@/services';
import { thunks } from '@/store/thunks/search-filters';

const SearchBody = () => {
  const stateSearchFilters = useAppSelector((state) => state.searchFilters);
  const dispatch = useAppDispatch();

  const handleFiltersToggle = useCallback(() => {
    const sidebarIsOpen = !stateSearchFilters.sidebarIsOpen;
    dispatch(thunks.setSidebarIsOpen(sidebarIsOpen));
    localStorageService.updateValueInSettings('filterSidebarIsOpen', sidebarIsOpen);
  }, [dispatch, stateSearchFilters.sidebarIsOpen]);

  return (
    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
      <Typography variant="h2">Users</Typography>
      <Button
        color="primary"
        startIcon={stateSearchFilters.sidebarIsOpen ? <BsFilterSquare /> : <IoFilterSharp />}
        onClick={handleFiltersToggle}
        variant="contained"
      >
        Filters
      </Button>
    </Stack>
  );
};

export default SearchBody;
