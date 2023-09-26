const STORAGE_KEY_PREFIX = 'app';

export const makeStorageKey = (name: string): string => `${STORAGE_KEY_PREFIX}.${name}`;
