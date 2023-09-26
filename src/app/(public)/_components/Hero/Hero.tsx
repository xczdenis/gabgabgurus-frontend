import { Box, Container, Stack, Typography } from '@mui/material';
import { FindPartnersButton } from '@/app/(public)/_components/FindPartnersButton';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px',
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box maxWidth="sm">
          <Typography variant="h1" sx={{ mb: 2 }}>
            Talk the Talk with&nbsp;
            <Typography component="span" color="primary.main" variant="inherit">
              Native Speakers
            </Typography>
          </Typography>
          <Typography
            color="text.secondary"
            sx={{
              mb: 2,
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Find your Language Partner and improve your Language Skills by sharing with others just like you.
          </Typography>
          <Stack alignItems="center" direction="row" spacing={2}>
            <FindPartnersButton />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
