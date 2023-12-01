import { CacheKeys } from '@/config';
import { userService } from '@/modules/services';
import useSWR, { mutate, SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.UserIAm;

const fetcher = () => {
  return userService.iam();
};

const options: SWRConfiguration = {
  dedupingInterval: 1000,
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export const useIam = () => {
  const { data, error, isLoading } = useSWR(CACHE_KEY, fetcher, options);

  return {
    user: data,
    isLoading,
    isError: error,
    revalidate: () => mutate(CACHE_KEY),
  };
};
