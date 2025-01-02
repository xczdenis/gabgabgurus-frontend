'use client';

import { useAppSelector } from '@/lib/hooks/store';
import { Alert, Grid2 } from '@mui/material';
import { auto } from '@popperjs/core';

export const ChannelRoomBlockAlert = () => {
  const isBlocked = useAppSelector((state) => state.chat.isBlocked);

  if (!isBlocked) {
    return null;
  }

  return (
    <Grid2 container justifyContent="center" py={2}>
      <Grid2 size={{ xs: 'auto' }}>
        <Alert variant="filled" severity="warning">
          This chat is blocked
        </Alert>
      </Grid2>
    </Grid2>
  );
};
