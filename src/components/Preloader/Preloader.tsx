import { Box, CircularProgress } from '@mui/material';

const Preloader = () => {
  return (
    <Box sx={{ display: 'flex' }} justifyContent="center" alignItems="center" height="100vh">
      <CircularProgress sx={{ color: '#6366F1' }} />
    </Box>
  );
};

export default Preloader;
