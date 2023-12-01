import { CACHE_TTL_FOR_STATIC_DATA_MS, CacheKeys } from '@/config';
import { refsService } from '@/modules/services';
import useSWR, { SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.Languages;

const fetcher = () => {
  return refsService.getLanguages();
};

const options: SWRConfiguration = {
  dedupingInterval: CACHE_TTL_FOR_STATIC_DATA_MS,
};

export const useLanguages = () => {
  const { data, error, isLoading } = useSWR(CACHE_KEY, fetcher, options);

  return {
    languages: data,
    isLoading,
    isError: error,
  };
};
