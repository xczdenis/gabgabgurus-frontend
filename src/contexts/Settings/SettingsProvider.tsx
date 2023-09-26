'use client';

import { useCallback, useEffect, useState } from 'react';
import { initialSettings, initialState, SettingsContext } from './context';
import { IState, TOptionalISettings, TProps } from './types';
import { localStorageService } from '@/services';
import { PaletteMode } from '@/config';
import { Preloader } from '@/components/Preloader';

const SettingsProvider: React.FC<TProps> = ({ children }) => {
  const [state, setState] = useState<IState>(initialState);

  useEffect(() => {
    const restored = localStorageService.getSettings();

    if (restored) {
      setState((prevState) => ({
        ...prevState,
        ...restored,
        isInitialized: true,
      }));
    } else {
      localStorageService.setSettings(initialSettings);
    }
  }, []);

  const handleReset = useCallback(() => {
    localStorageService.removeSettings();
    setState((prevState) => ({
      ...prevState,
      ...initialSettings,
    }));
  }, []);

  const handleUpdate = useCallback((settings: TOptionalISettings) => {
    setState((prevState) => {
      const updatedSettings = {
        ...prevState,
        ...settings,
      };
      localStorageService.setSettings(updatedSettings);
      return updatedSettings;
    });
  }, []);

  const switchTheme = useCallback(() => {
    setState((prevState) => {
      let paletteMode = PaletteMode.Light;
      if (prevState?.paletteMode === PaletteMode.Light) {
        paletteMode = PaletteMode.Dark;
      }
      const updatedSettings = {
        ...prevState,
        paletteMode,
      };
      localStorageService.setSettings(updatedSettings);
      return updatedSettings;
    });
  }, []);

  if (!state.isInitialized) {
    return <Preloader />;
  }

  return (
    <SettingsContext.Provider
      value={{
        ...state,
        handleReset,
        handleUpdate,
        switchTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
