import useSWR, { SWRConfiguration } from 'swr';
import { dataService } from '@/services';
import { CACHE_TTL_FOR_STATIC_DATA_MS, CacheKeys } from '@/config';

const fetcher = () => {
  return dataService.getLanguages();
};
const options: SWRConfiguration = {
  dedupingInterval: CACHE_TTL_FOR_STATIC_DATA_MS,
};

export const useLanguages = () => {
  const { data, error, isLoading } = useSWR(CacheKeys.Languages, fetcher, options);

  return {
    languages: data,
    isLoading,
    isError: error,
  };
};
