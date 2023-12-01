import { SettingsContext } from '@/contexts/Settings';
import { useContext } from 'react';

export const useSettings = () => {
  return useContext(SettingsContext);
};
