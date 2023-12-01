import { ISettings } from '@/lib/types/theme';
import { IUser } from '@/lib/types/user';
import { makeStorageKey } from '@/lib/utils/make-storage-key';

const storage = globalThis.localStorage;

const storageKeys = {
  user: makeStorageKey('user'),
  languages: makeStorageKey('language'),
  settings: makeStorageKey('settings'),
  filterSidebarIsOpen: makeStorageKey('filterSidebarIsOpen'),
};

export class LocalStorageService {
  public get = <T>(key: string): T | null => {
    let value = null;

    try {
      const restored = storage.getItem(key);

      if (restored) {
        value = JSON.parse(restored);
      }
    } catch (err) {
      console.error(err);
    }

    return value;
  };

  public set = <T>(key: string, data: T) => {
    storage.setItem(key, JSON.stringify(data));
  };

  public remove = (key: string): void => {
    storage.removeItem(key);
  };

  public getUser = () => {
    return this.get<IUser>(storageKeys.user);
  };

  public setUser = (data: IUser): void => {
    this.set<IUser>(storageKeys.user, data);
  };

  public removeUser = (): void => {
    storage.removeItem(storageKeys.user);
  };

  public setSettings = (data: ISettings): void => {
    this.set<ISettings>(storageKeys.settings, data);
  };

  public getSettings = () => {
    return this.get<ISettings>(storageKeys.settings);
  };

  public updateValueInSettings = <K extends keyof ISettings>(key: K, value: ISettings[K]): void => {
    const settings = this.getSettings();
    if (settings) {
      settings[key] = value;
      this.setSettings(settings);
    }
  };

  public getValueFromSettings = <K extends keyof ISettings>(key: K): ISettings[K] | null => {
    const settings = this.getSettings();
    if (settings) {
      return settings[key];
    }
    return null;
  };

  public removeSettings = (): void => {
    this.remove(storageKeys.settings);
  };
}
