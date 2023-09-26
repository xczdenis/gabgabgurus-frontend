import { PaletteMode } from '@/config';
import { IThemeConfig } from '@/lib/types/theme';
import { createTheme as createMuiTheme, responsiveFontSizes } from '@mui/material/styles';
import { createOptions as createBaseOptions } from './base/create-options';
import { createOptions as createDarkOptions } from './dark/create-options';
import { createOptions as createLightOptions } from './light/create-options';

export const createTheme = (config: IThemeConfig) => {
  let theme = createMuiTheme(
    // Base options available for both dark and light palette modes
    createBaseOptions(config),
    // Options based on selected palette mode, color preset and contrast
    config.paletteMode === PaletteMode.Dark ? createDarkOptions(config) : createLightOptions(config)
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
