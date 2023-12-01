'use client';

import { useSearchFilterSidebarState } from '@/lib/hooks/use-search-filter-sidebar-state';
import { Drawer } from '@mui/material';

type TProps = {
  content?: React.ReactNode;
};

export const FilterSidebarDrawerDesktop = (props: TProps) => {
  const { content } = props;
  const { sidebarIsOpen } = useSearchFilterSidebarState();

  return (
    <Drawer
      anchor="left"
      open={sidebarIsOpen}
      variant="persistent"
      PaperProps={{
        elevation: 16,
        sx: {
          border: 'none',
          borderRadius: 2.5,
          overflow: 'hidden',
          position: 'relative',
        },
      }}
      sx={{ width: 380, zIndex: 1 }}
    >
      {content}
    </Drawer>
  );
};
