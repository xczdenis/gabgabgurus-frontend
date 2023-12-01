'use client';

import { PaletteMode } from '@/config';
import { useSettings } from '@/lib/hooks/use-settings';
import { useCallback } from 'react';
import ToggleButton from './ToggleButton';

const ThemeSwitcher = () => {
  const { switchTheme, paletteMode } = useSettings();
  const handleClick = useCallback(() => {
    switchTheme();
  }, [switchTheme]);
  return <ToggleButton onChange={handleClick} checked={paletteMode === PaletteMode.Dark} />;
};

export default ThemeSwitcher;
