'use client';

import { Alert, Unstable_Grid2 as Grid } from '@mui/material';
import { useAppSelector } from '@/lib/hooks/store';

export const ChatThreadBlockAlert: React.FC = () => {
  const { isBlocked } = useAppSelector((state) => state.chat);

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
