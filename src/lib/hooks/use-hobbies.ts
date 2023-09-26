import { dataService } from '@/services';
import useSWR, { SWRConfiguration } from 'swr';
import { CACHE_TTL_FOR_STATIC_DATA_MS, CacheKeys } from '@/config';

const fetcher = () => {
  return dataService.getHobbies();
};
const options: SWRConfiguration = {
  dedupingInterval: CACHE_TTL_FOR_STATIC_DATA_MS,
};

export const useHobbies = () => {
  const { data, error, isLoading } = useSWR(CacheKeys.Countries, fetcher, options);

  return {
    hobbies: data,
    isLoading,
    isError: error,
  };
};
