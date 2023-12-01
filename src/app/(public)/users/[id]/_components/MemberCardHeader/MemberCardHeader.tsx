'use client';

import { indigo, success } from '@/theme/colors';
import { Box, CardHeader, Typography } from '@mui/material';
import { cloneElement } from 'react';
import { TProps } from './types';

const colors = {
  indigo: indigo.main,
  success: success.main,
};

const MemberCardHeader = (props: TProps) => {
  const { header, icon, color = 'indigo' } = props;
  const iconColor = colors[color];
  const newIcon = cloneElement(icon, { size: 24, color: iconColor });
  return (
    <CardHeader
      title={
        <Box alignItems="center" display="flex" flexDirection="row">
          {newIcon}
          <Typography variant="inherit" ml={2}>
            {header}
          </Typography>
        </Box>
      }
    />
  );
};

export default MemberCardHeader;
