import { baseSWRConfig, CacheKeys } from '@/config';
import { TGetChannelsParams } from '@/modules/data-gateways/interfaces/channel-gateway';
import { chatService } from '@/modules/services';
import useSWR, { SWRConfiguration } from 'swr';

const CACHE_KEY = CacheKeys.Channels;

const fetcher = (params?: TGetChannelsParams) => () => {
  return chatService.getChannels(params);
};

const options: SWRConfiguration = {
  ...baseSWRConfig,
};

export const useChannels = (params?: TGetChannelsParams) => {
  const { data, error, isLoading } = useSWR(CACHE_KEY, fetcher(params), options);

  return {
    channelPagination: data,
    isLoading,
    isError: error,
  };
};
