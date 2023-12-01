'use client';

import { Popover } from '@mui/material';

type TProps = {
  children: React.ReactNode;
  onClose?: () => void;
  isOpen: boolean;
  anchorEl: Element | null;
};

export const NPContainer = (props: TProps) => {
  const { children, onClose, isOpen, anchorEl } = props;

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      disableScrollLock
      onClose={onClose}
      open={isOpen}
      slotProps={{
        paper: { sx: { width: 380 } },
      }}
    >
      {children}
    </Popover>
  );
};
