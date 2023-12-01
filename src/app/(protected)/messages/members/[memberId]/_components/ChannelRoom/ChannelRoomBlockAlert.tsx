'use client';

import { useAppSelector } from '@/lib/hooks/store';
import { Alert, Unstable_Grid2 as Grid } from '@mui/material';

export const ChannelRoomBlockAlert = () => {
  const isBlocked = useAppSelector((state) => state.chat.isBlocked);

  if (!isBlocked) {
    return null;
  }

  return (
    <Grid container justifyContent="center" py={2}>
      <Grid xs="auto">
        <Alert variant="filled" severity="warning">
          This chat is blocked
        </Alert>
      </Grid>
    </Grid>
  );
};
