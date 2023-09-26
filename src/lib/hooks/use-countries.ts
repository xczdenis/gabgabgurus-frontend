import { dataService } from '@/services';
import useSWR, { SWRConfiguration } from 'swr';
import { CACHE_TTL_FOR_STATIC_DATA_MS, CacheKeys } from '@/config';

const fetcher = () => {
  return dataService.getCountries();
};
const options: SWRConfiguration = {
  dedupingInterval: CACHE_TTL_FOR_STATIC_DATA_MS,
};

export const useCountries = () => {
  const { data, error, isLoading } = useSWR(CacheKeys.Countries, fetcher, options);

  return {
    countries: data,
    isLoading,
    isError: error,
  };
};
