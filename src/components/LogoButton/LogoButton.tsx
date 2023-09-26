'use client';

import { Logo } from '@/components/Logo';
import { cmpInfo } from '@/config';
import { urls } from '@/urls';
import { Box, Stack } from '@mui/material';
import NextLink from 'next/link';
import { useIsBreakpointUp } from '@/lib/hooks/use-is-breakpoint-up';

const LogoButton = () => {
  const mdUp = useIsBreakpointUp('md');
  return (
    <Stack alignItems="center" direction="row" spacing={1} sx={{ flexGrow: 1 }}>
      <Stack
        alignItems="center"
        component={NextLink}
        direction="row"
        display="inline-flex"
        href={urls.index}
        spacing={1}
        sx={{ textDecoration: 'none' }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            height: 24,
            width: 24,
          }}
        >
          <Logo />
        </Box>
        {mdUp && (
          <Box
            sx={{
              color: 'text.primary',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: '0.3px',
              lineHeight: 2.5,
              '& span': {
                color: 'primary.main',
              },
            }}
          >
            {cmpInfo.name}
          </Box>
        )}
      </Stack>
    </Stack>
  );
};

export default LogoButton;
