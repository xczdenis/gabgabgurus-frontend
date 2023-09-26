import { createTypography } from './create-typography';
import { IThemeConfig } from '@/lib/types/theme';
import { ThemeOptions } from '@mui/material/styles';
import { createComponents } from './create-components';

// Here we do not modify the "palette" and "shadows" because "light" and "dark" mode
// may have different values.

export const createOptions = (config: IThemeConfig): ThemeOptions => {
  const { direction = 'ltr' } = config;
  const components = createComponents();
  const typography = createTypography();

  return {
    direction,
    components,
    typography,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    shape: {
      borderRadius: 8,
    },
  };
};
