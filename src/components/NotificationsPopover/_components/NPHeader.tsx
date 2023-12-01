'use client';

import { useAppDispatch } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/notifications';
import { IconButton, Stack, SvgIcon, Tooltip, Typography } from '@mui/material';
import { PiEnvelopeOpenLight } from 'react-icons/pi';

export const NPHeader = () => {
  const dispatch = useAppDispatch();

  const markAllAsRead = () => {
    dispatch(thunks.markAllAsRead());
  };

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      spacing={2}
      sx={{
        px: 3,
        py: 2,
      }}
    >
      <Typography color="inherit" variant="h6">
        Notifications
      </Typography>
      <Tooltip title="Mark all as read">
        <IconButton onClick={markAllAsRead} size="small" color="inherit">
          <SvgIcon>
            <PiEnvelopeOpenLight />
          </SvgIcon>
        </IconButton>
      </Tooltip>
    </Stack>
  );
};
