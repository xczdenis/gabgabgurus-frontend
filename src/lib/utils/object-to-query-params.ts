import { removeNullKeys } from '@/lib/utils/remove-null-keys';

export const objectToQueryParams = (obj?: Record<string, unknown>): string => {
  if (!obj) {
    return '';
  }

  return Object.keys(removeNullKeys(obj))
    .map((key) => key + '=' + obj[key])
    .join('&');
};
