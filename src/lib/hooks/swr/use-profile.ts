import { CacheKeys } from '@/config';
import { userService } from '@/modules/services';
import useSWR, { mutate, SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.UserProfile;

const fetcher = () => {
  return userService.getUserProfile();
};

const options: SWRConfiguration = {
  dedupingInterval: 1000,
  revalidateOnFocus: false,
};

export const useProfile = () => {
  const { data, error, isLoading } = useSWR(CACHE_KEY, fetcher, options);

  return {
    profile: data,
    isLoading,
    isError: error,
    revalidate: () => mutate(CACHE_KEY),
  };
};
