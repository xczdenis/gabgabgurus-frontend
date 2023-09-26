'use client';

import { useSettings } from '@/lib/hooks/use-settings';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { TProps } from './types';
import { createTheme } from '@/theme';

const ThemeRegistry: React.FC<TProps> = ({ children }) => {
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
