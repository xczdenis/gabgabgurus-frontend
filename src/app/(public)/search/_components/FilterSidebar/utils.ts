import { TSearchParams } from './types';

export const decodeSearchParam = <T>(searchParams: TSearchParams, paramName: keyof TSearchParams): T | null => {
  const encodedValue = searchParams[paramName];
  if (encodedValue) {
    const decodedValue = decodeURIComponent(encodedValue);
    return JSON.parse(decodedValue);
  }
  return null;
};
