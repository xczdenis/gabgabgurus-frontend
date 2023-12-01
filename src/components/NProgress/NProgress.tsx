'use client';

import { useTheme } from '@mui/material/styles';
import { Next13ProgressBar } from 'next13-progressbar';
import { TProps } from './types';

const Providers = (props: TProps) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <>
      {children}
      <Next13ProgressBar
        height="3px"
        color={theme.palette.primary.main}
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};

export default Providers;
