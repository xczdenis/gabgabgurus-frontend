'use client';

import { Button, Theme } from '@mui/material';
import NextLink from 'next/link';
import { urls } from '@/urls';
import { BsFillEyeFill } from 'react-icons/bs';

const getButtonStylesByTheme = (theme: Theme) => {
  return theme.palette.mode === 'dark'
    ? {
        backgroundColor: 'neutral.50',
        color: 'neutral.900',
        '&:hover': {
          backgroundColor: 'neutral.200',
        },
      }
    : {
        backgroundColor: 'neutral.900',
        color: 'neutral.50',
        '&:hover': {
          backgroundColor: 'neutral.700',
        },
      };
};

const FindPartnersButton = () => {
  return (
    <Button
      component={NextLink}
      href={urls.search}
      startIcon={<BsFillEyeFill />}
      sx={(theme) => getButtonStylesByTheme(theme)}
      variant="contained"
    >
      Find Language Partners
    </Button>
  );
};

export default FindPartnersButton;
