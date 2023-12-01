import { TDefaultId } from '@/lib/types/common';
import { formatToHumanDate } from '@/lib/utils/format-to-human-date';
import { Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

type TProps = {
  createdAt: TDefaultId;
};

export const ChannelMessageTime = (props: TProps) => {
  const { createdAt } = props;
  const initialAgo = formatToHumanDate(createdAt);
  const [ago, setAgo] = useState(initialAgo);

  const updateAgo = useCallback(() => {
    setAgo(formatToHumanDate(createdAt));
  }, [createdAt]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      updateAgo();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [updateAgo]);

  return (
    <Typography color="text.secondary" noWrap variant="caption">
      {ago}
    </Typography>
  );
};
