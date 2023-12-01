import { urls } from '@/urls';
import { Box, Button, Container, Typography } from '@mui/material';
import { Metadata } from 'next';
import NextLink from 'next/link';

export const metadata: Metadata = {
  title: 'Error: Not Found',
};

const Page = () => {
  return (
    <Box
      component="main"
      sx={{
        alignItems: 'center',
        display: 'flex',
        flexGrow: 1,
        py: '80px',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 6,
          }}
        >
          <Box
            alt="Not found"
            component="img"
            src="/assets/errors/error-404.png"
            sx={{
              height: 'auto',
              maxWidth: '100%',
              width: 400,
            }}
          />
        </Box>
        <Typography align="center" variant="h1">
          404: The page you are looking for isn’t here
        </Typography>
        <Typography align="center" color="text.secondary" sx={{ mt: 0.5 }}>
          You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 6,
          }}
        >
          <Button component={NextLink} href={urls.index}>
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
