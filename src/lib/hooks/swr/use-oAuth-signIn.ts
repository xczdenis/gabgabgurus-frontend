import { CacheKeys } from '@/config';
import { TSignInParams } from '@/modules/data-gateways/interfaces/oauth-gateway';
import { oAuthService } from '@/modules/services';
import useSWR, { mutate, SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.OAuthSignIn;

const fetcher = (params: TSignInParams) => () => {
  return oAuthService.signIn(params);
};

const options: SWRConfiguration = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export const useOAuthSignIn = (params: TSignInParams) => {
  const { data, error, isLoading } = useSWR(CACHE_KEY, fetcher(params), options);

  return {
    user: data,
    isLoading,
    isError: error,
    revalidate: () => mutate(CACHE_KEY),
  };
};
