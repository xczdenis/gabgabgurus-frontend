'use client';

import { Box, Typography } from '@mui/material';
import { TProps } from './types';
import { green } from '@/theme/colors';

const UserOnlineStatus: React.FC<TProps> = (props) => {
  const { status, ...other } = props;

  return (
    <Box mt={1} display="flex" alignItems="center" justifyContent="center" {...other}>
      <Box width={8} height={8} bgcolor={green.main} borderRadius="50%" marginRight={1}></Box>
      <Typography color={green.main} variant="body2">
        {status}
      </Typography>
    </Box>
  );
};

export default UserOnlineStatus;
