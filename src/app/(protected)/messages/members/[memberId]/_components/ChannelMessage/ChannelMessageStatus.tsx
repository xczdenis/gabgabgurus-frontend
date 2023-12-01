'use client';

import { MessageStatuses } from '@/config';
import { green } from '@/theme/colors';
import { Box } from '@mui/material';
import React from 'react';
import { LuCheck, LuCheckCheck } from 'react-icons/lu';

type TProps = {
  status: MessageStatuses;
};

export const ChannelMessageStatus = (props: TProps) => {
  const { status } = props;

  if (status === MessageStatuses.Read) {
    return <LuCheckCheck color={green.main} />;
  }

  return (
    <Box color="text.secondary">
      <LuCheck />
    </Box>
  );
};
