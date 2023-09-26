'use client';

import NextLink from 'next/link';
import { Box, Button, Container, Typography } from '@mui/material';
import { urls } from '@/urls';

const Page = () => {
  return (
    <>
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
              src="/assets/errors/error-500.png"
              sx={{
                height: 'auto',
                maxWidth: '100%',
                width: 400,
              }}
            />
          </Box>
          <Typography align="center" variant="h1">
            Ups... Something went wrong :(
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mt: 0.5 }}>
            Most likely we are already solving this problem. Whichever it is, try using the navigation.
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
    </>
  );
};

export default Page;
