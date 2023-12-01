'use client';

import { useSettings } from '@/lib/hooks/use-settings';
import { createTheme } from '@/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { TProps } from './types';

const ThemeRegistry = (props: TProps) => {
  const { children } = props;
  const settings = useSettings();
  const theme = createTheme({
    colorPreset: settings.colorPreset,
    contrast: settings.contrast,
    direction: settings.direction,
    paletteMode: settings.paletteMode,
    responsiveFontSizes: settings.responsiveFontSizes,
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeRegistry;
