'use client';

import { useSearchFilterSidebarState } from '@/lib/hooks/use-search-filter-sidebar-state';
import { Button, Stack, Typography } from '@mui/material';
import { BsFilterSquare } from 'react-icons/bs';
import { IoFilterSharp } from 'react-icons/io5';

const SearchBody = () => {
  const { sidebarIsOpen, toggleSidebarIsOpen } = useSearchFilterSidebarState();

  return (
    <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
      <Typography variant="h2">Users</Typography>
      <Button
        color="primary"
        startIcon={sidebarIsOpen ? <BsFilterSquare /> : <IoFilterSharp />}
        onClick={toggleSidebarIsOpen}
        variant="contained"
      >
        Filters
      </Button>
    </Stack>
  );
};

export default SearchBody;
