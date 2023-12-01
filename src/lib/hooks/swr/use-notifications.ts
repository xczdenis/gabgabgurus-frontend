import { baseSWRConfig, CacheKeys } from '@/config';
import { notifyService } from '@/modules/services';
import useSWR, { SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.Notifications;

const fetcher = () => {
  return notifyService.getNotifications();
};

const options: SWRConfiguration = {
  ...baseSWRConfig,
};

export const useNotifications = () => {
  const { data, error, isLoading } = useSWR(CACHE_KEY, fetcher, options);

  return {
    notificationsPagination: data,
    isLoading,
    isError: error,
  };
};
