'use client';

import { useIsBreakpointUp } from '@/lib/hooks/use-is-breakpoint-up';
import { useSearchFilterSidebarState } from '@/lib/hooks/use-search-filter-sidebar-state';
import { IconButton, Stack, Typography } from '@mui/material';
import { GrClose } from 'react-icons/gr';

export const FilterSidebarHeader = () => {
  const { toggleSidebarIsOpen } = useSearchFilterSidebarState();
  const lgUp = useIsBreakpointUp('lg');

  return (
    <Stack alignItems="center" justifyContent="space-between" direction="row" sx={{ p: 3 }}>
      <Typography variant="h5">Filters</Typography>
      {!lgUp && (
        <IconButton onClick={toggleSidebarIsOpen}>
          <GrClose />
        </IconButton>
      )}
    </Stack>
  );
};
