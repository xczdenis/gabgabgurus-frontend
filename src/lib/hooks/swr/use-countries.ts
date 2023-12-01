import { CACHE_TTL_FOR_STATIC_DATA_MS, CacheKeys } from '@/config';
import { refsService } from '@/modules/services';
import useSWR, { SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.Countries;

const fetcher = () => {
  return refsService.getCountries();
};

const options: SWRConfiguration = {
  dedupingInterval: CACHE_TTL_FOR_STATIC_DATA_MS,
};

export const useCountries = () => {
  const { data, error, isLoading } = useSWR(CACHE_KEY, fetcher, options);

  return {
    countries: data,
    isLoading,
    isError: error,
  };
};
