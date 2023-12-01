'use client';

import { useSearchFilterSidebarState } from '@/lib/hooks/use-search-filter-sidebar-state';
import { Drawer } from '@mui/material';

type TProps = {
  children?: React.ReactNode;
};

export const FilterSidebarDrawerMobile = (props: TProps) => {
  const { children } = props;
  const { sidebarIsOpen, toggleSidebarIsOpen } = useSearchFilterSidebarState();

  return (
    <Drawer
      anchor="left"
      open={sidebarIsOpen}
      variant="temporary"
      PaperProps={{
        sx: {
          maxWidth: '100%',
          width: '100%',
          pointerEvents: 'auto',
          position: 'absolute',
        },
      }}
      hideBackdrop
      ModalProps={{
        sx: {
          pointerEvents: 'none',
          position: 'absolute',
        },
      }}
      onClose={toggleSidebarIsOpen}
    >
      {children}
    </Drawer>
  );
};
