'use client';

import ToggleButton from './ToggleButton';
import { useCallback } from 'react';
import { useSettings } from '@/lib/hooks/use-settings';
import { PaletteMode } from '@/config';

const ThemeSwitcher: React.FC = () => {
  const { switchTheme, paletteMode } = useSettings();
  const handleClick = useCallback(() => {
    switchTheme();
  }, [switchTheme]);
  return <ToggleButton onChange={handleClick} checked={paletteMode === PaletteMode.Dark} />;
};

export default ThemeSwitcher;
