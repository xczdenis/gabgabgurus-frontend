'use client';

import { Next13ProgressBar } from 'next13-progressbar';
import { useTheme } from '@mui/material/styles';
import { TProps } from './types';

const Providers: React.FC<TProps> = ({ children }) => {
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
