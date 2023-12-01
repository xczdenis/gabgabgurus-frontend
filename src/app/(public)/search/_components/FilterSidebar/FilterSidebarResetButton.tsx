'use client';

import { useAppDispatch } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/search-filters';
import { Button } from '@mui/material';

export const FilterSidebarResetButton = () => {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(thunks.resetAllFilters());
  };

  return (
    <Button variant="outlined" color="secondary" onClick={handleResetFilters}>
      Reset
    </Button>
  );
};
