import { Box, Typography } from '@mui/material';

export const NPEmptyTitle = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2">There are no notifications</Typography>
    </Box>
  );
};
