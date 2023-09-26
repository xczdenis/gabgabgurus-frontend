import { TColorPreset, TContrast } from '@/lib/types/theme';

/* eslint-disable @typescript-eslint/naming-convention */
declare module '@mui/material/styles' {
  interface PaletteOptions {
    colorPreset: TColorPreset;
    contrast: TContrast;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Record<number, string>;
  }
}

export {};
/* eslint-enable @typescript-eslint/naming-convention */
