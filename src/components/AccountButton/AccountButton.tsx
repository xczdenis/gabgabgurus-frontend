'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import { Avatar, Box, ButtonBase } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import { AccountPopover } from './AccountPopover';

const AccountButton = () => {
  const { user } = useAuth();
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [openPopover, setOpenPopover] = useState<boolean>(false);

  const handlePopoverOpen = useCallback(() => {
    setOpenPopover(true);
  }, []);

  const handlePopoverClose = useCallback(() => {
    setOpenPopover(false);
  }, []);

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handlePopoverOpen}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'divider',
          height: 40,
          width: 40,
          borderRadius: '50%',
        }}
      >
        <Avatar sx={{ height: 32, width: 32 }} src={user?.avatar} />
      </Box>
      <AccountPopover anchorEl={anchorRef.current} onClose={handlePopoverClose} open={openPopover} />
    </>
  );
};

export default AccountButton;
