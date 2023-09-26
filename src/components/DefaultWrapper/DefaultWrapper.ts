'use client';

import { styled } from '@mui/material/styles';

const DefaultWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
}));

export default DefaultWrapper;
