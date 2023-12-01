'use client';

import { PaletteMode } from '@/config';
import { ISettings } from '@/lib/types/theme';
import { createContext } from 'react';
import { IContextProps, IState } from './types';

export const initialSettings: ISettings = {
  direction: 'ltr',
  paletteMode: PaletteMode.Light,
  colorPreset: 'indigo',
  contrast: 'normal',
  layout: 'vertical',
  navColor: 'evident',
  responsiveFontSizes: true,
  stretch: false,
  filterSidebarIsOpen: true,
};

export const initialState: IState = {
  ...initialSettings,
  isInitialized: false,
};

export const SettingsContext = createContext<IContextProps>({
  ...initialState,
  handleReset: () => {},
  handleUpdate: () => {},
  switchTheme: () => {},
});
