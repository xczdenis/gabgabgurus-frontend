import { STORAGE_KEY_PREFIX } from '@/config';

export const makeStorageKey = (name: string): string => `${STORAGE_KEY_PREFIX}.${name}`;
