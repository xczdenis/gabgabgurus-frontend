import { baseSWRConfig, CacheKeys, USER_ONLINE_WINDOW_MS } from '@/config';
import { userService } from '@/modules/services';
import useSWR, { SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.LastActivityUpdater;

const fetcher = () => {
  return userService.updateLastActivity();
};

const options: SWRConfiguration = {
  ...baseSWRConfig,
  refreshInterval: USER_ONLINE_WINDOW_MS,
};

export const useLastActivityUpdater = () => {
  const { error, isLoading } = useSWR(CACHE_KEY, fetcher, options);

  return {
    isLoading,
    isError: error,
  };
};
