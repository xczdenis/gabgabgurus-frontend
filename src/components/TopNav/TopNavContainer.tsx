'use client';

import { useWindowScroll } from '@/lib/hooks/use-window-scroll';
import { Box, Container } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useCallback, useState } from 'react';

type TProps = {
  children: React.ReactNode;
};

const TopNavContainer = (props: TProps) => {
  const { children } = props;
  const [elevate, setElevate] = useState(false);
  const offset = 64;
  const delay = 100;

  const handleWindowScroll = useCallback(() => {
    if (window.scrollY > offset) {
      setElevate(true);
    } else {
      setElevate(false);
    }
  }, []);

  useWindowScroll({
    handler: handleWindowScroll,
    delay,
  });

  return (
    <>
      <div></div>
      <Box
        component="header"
        sx={{
          left: 0,
          position: 'fixed',
          right: 0,
          top: 0,
          pt: 2,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            backdropFilter: 'blur(6px)',
            backgroundColor: 'transparent',
            borderRadius: 2.5,
            boxShadow: 'none',
            transition: (theme) =>
              theme.transitions.create('box-shadow, background-color', {
                easing: theme.transitions.easing.easeInOut,
                duration: 200,
              }),
            ...(elevate && {
              backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.9),
              boxShadow: 8,
            }),
          }}
        >
          {children}
        </Container>
      </Box>
    </>
  );
};

export default TopNavContainer;
