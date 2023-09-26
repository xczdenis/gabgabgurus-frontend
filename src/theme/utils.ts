import { blue, green, IColorWithAlphas, indigo, purple } from './colors';
import { TColorPreset } from '@/lib/types/theme';

export const getPrimary = (preset: TColorPreset): IColorWithAlphas => {
  switch (preset) {
    case 'blue':
      return blue;
    case 'green':
      return green;
    case 'indigo':
      return indigo;
    case 'purple':
      return purple;
    default:
      console.error('Invalid color preset, accepted values: "blue", "green", "indigo" or "purple"".');
      return blue;
  }
};
