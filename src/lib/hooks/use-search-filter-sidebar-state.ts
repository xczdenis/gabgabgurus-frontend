import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { localStorageService } from '@/modules/services';
import { thunks } from '@/store/thunks/search-filters';
import { useCallback } from 'react';

export const useSearchFilterSidebarState = () => {
  const sidebarIsOpen = useAppSelector((state) => state.searchFilters.sidebarIsOpen);
  const dispatch = useAppDispatch();

  const toggleSidebarIsOpen = useCallback(() => {
    const newSidebarIsOpenState = !sidebarIsOpen;
    dispatch(thunks.setSidebarIsOpen(newSidebarIsOpenState));
    localStorageService.updateValueInSettings('filterSidebarIsOpen', newSidebarIsOpenState);
  }, [dispatch, sidebarIsOpen]);

  return {
    sidebarIsOpen,
    toggleSidebarIsOpen,
  };
};
