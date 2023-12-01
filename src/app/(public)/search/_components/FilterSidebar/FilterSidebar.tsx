'use client';

import { useAppDispatch } from '@/lib/hooks/store';
import { useIsBreakpointUp } from '@/lib/hooks/use-is-breakpoint-up';
import { TCountry, THobby, TLanguage } from '@/lib/types/refs';
import { localStorageService } from '@/modules/services';
import { thunks } from '@/store/thunks/search-filters';
import { useCallback, useEffect } from 'react';
import { FilterSidebarContent } from './FilterSidebarContent';
import { FilterSidebarDrawerDesktop } from './FilterSidebarDrawerDesktop';
import { FilterSidebarDrawerMobile } from './FilterSidebarDrawerMobile';
import { TProps } from './types';
import { decodeSearchParam } from './utils';

const FilterSidebar = (props: TProps) => {
  const { searchParams } = props;
  const lgUp = useIsBreakpointUp('lg');
  const dispatch = useAppDispatch();

  const restoreFilters = useCallback(() => {
    const speaks = decodeSearchParam<TLanguage[]>(searchParams, 'speaks');
    if (speaks) {
      dispatch(thunks.setSpeaksLanguages(speaks));
    }

    const learning = decodeSearchParam<TLanguage[]>(searchParams, 'learning');
    if (learning) {
      dispatch(thunks.setLearningLanguages(learning));
    }

    const countries = decodeSearchParam<TCountry[]>(searchParams, 'countries');
    if (countries) {
      dispatch(thunks.setCountries(countries));
    }

    const hobbies = decodeSearchParam<THobby[]>(searchParams, 'hobbies');
    if (hobbies) {
      dispatch(thunks.setHobbies(hobbies));
    }
  }, [dispatch, searchParams]);

  const restoreSidebarIsOpen = useCallback(() => {
    const restoredOpenSidebar = localStorageService.getValueFromSettings('filterSidebarIsOpen') ?? true;
    dispatch(thunks.setSidebarIsOpen(lgUp && restoredOpenSidebar));
  }, [dispatch, lgUp]);

  useEffect(() => {
    restoreSidebarIsOpen();
  }, [restoreSidebarIsOpen]);

  useEffect(() => {
    restoreFilters();
  }, [restoreFilters]);

  if (lgUp) {
    return <FilterSidebarDrawerDesktop content={<FilterSidebarContent />} />;
  }

  return (
    <FilterSidebarDrawerMobile>
      <FilterSidebarContent />
    </FilterSidebarDrawerMobile>
  );
};

export default FilterSidebar;
