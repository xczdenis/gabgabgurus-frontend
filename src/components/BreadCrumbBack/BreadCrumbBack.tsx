'use client';

import { Link, SvgIcon, Typography } from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { TProps } from './types';

const BreadCrumbBack = (props: TProps) => {
  const { text } = props;
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Link
      color="text.primary"
      component={NextLink}
      href="#"
      sx={{
        alignItems: 'center',
        display: 'inline-flex',
      }}
      underline="hover"
      onClick={handleClick}
    >
      <SvgIcon sx={{ mr: 1 }}>
        <FiArrowLeft />
      </SvgIcon>
      <Typography variant="subtitle2">{text}</Typography>
    </Link>
  );
};

export default BreadCrumbBack;
