'use client';

import { USER_ONLINE_WINDOW_SECONDS } from '@/config';
import { formatToHumanDate } from '@/lib/utils/format-to-human-date';
import { green } from '@/theme/colors';
import { Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { TProps } from './types';

const UPDATE_STATUS_INTERVAL_SECONDS = 2;
const ONLINE = 'online';

const formatDate = (dateInSeconds?: number) => {
  return formatToHumanDate(dateInSeconds);
};

const UserPresenceStatus = (props: TProps) => {
  const { title = '', updateStatusByInterval, lastActivity = false } = props;
  const [status, setStatus] = useState('');

  const updateStatus = useCallback(() => {
    if (lastActivity) {
      if (Date.now() / 1000 - lastActivity <= USER_ONLINE_WINDOW_SECONDS) {
        setStatus(ONLINE);
      } else {
        setStatus(formatDate(lastActivity));
      }
    }
  }, [lastActivity]);

  useEffect(() => {
    updateStatus();
    let interval: number | null = null;
    if (updateStatusByInterval) {
      interval = window.setInterval(updateStatus, UPDATE_STATUS_INTERVAL_SECONDS * 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [updateStatus, updateStatusByInterval]);

  if (status === ONLINE) {
    return (
      <Typography sx={{ whiteSpace: 'nowrap', color: green.main }} variant="caption">
        {ONLINE}
      </Typography>
    );
  }

  return (
    <Typography color="text.secondary" sx={{ whiteSpace: 'nowrap' }} variant="caption">
      {`${title} ${status}`}
    </Typography>
  );
};

export default UserPresenceStatus;
