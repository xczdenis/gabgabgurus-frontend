import { PaletteMode } from '@/config';

export type TBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type TColorPreset = 'blue' | 'green' | 'indigo' | 'purple';
export type TContrast = 'normal' | 'high';
export type TDirection = 'ltr' | 'rtl';
export type TPaletteMode = PaletteMode.Dark | PaletteMode.Light;
export type TLayoutDirection = 'vertical' | 'horizontal';
export type TNavColor = 'blend-in' | 'discreet' | 'evident';

export interface ISettings {
  direction: TDirection;
  paletteMode: TPaletteMode;
  colorPreset: TColorPreset;
  contrast: TContrast;
  layout: TLayoutDirection;
  navColor: TNavColor;
  responsiveFontSizes: boolean;
  stretch: boolean;
  filterSidebarIsOpen: boolean;
}

export interface IThemeConfig {
  direction: TDirection;
  paletteMode: TPaletteMode;
  colorPreset: TColorPreset;
  contrast: TContrast;
  responsiveFontSizes?: boolean;
}

export interface IPalette {
  neutral: Record<number, string>;
  action: {
    active: string;
    hover: string;
  };
  primary: {
    main: string;
  };
  text: {
    secondary: string;
  };
  divider: string;
  error: {
    main: string;
  };
}

export interface IComponentsConfig {
  palette: IPalette;
}
