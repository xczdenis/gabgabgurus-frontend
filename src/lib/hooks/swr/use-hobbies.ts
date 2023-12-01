import { CACHE_TTL_FOR_STATIC_DATA_MS, CacheKeys } from '@/config';
import { refsService } from '@/modules/services';
import useSWR, { SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.Hobbies;

const fetcher = () => {
  return refsService.getHobbies();
};

const options: SWRConfiguration = {
  dedupingInterval: CACHE_TTL_FOR_STATIC_DATA_MS,
};

export const useHobbies = () => {
  const { data, error, isLoading } = useSWR(CACHE_KEY, fetcher, options);

  return {
    hobbies: data,
    isLoading,
    isError: error,
  };
};
