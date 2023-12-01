'use client';

import { BasePagination } from '@/components/BasePagination';
import { useChannels } from '@/lib/hooks/swr/use-channels';
import { Stack } from '@mui/material';
import { ChannelListItem } from '../ChannelListItem';
import { TProps } from './types';

const ChannelList = (props: TProps) => {
  const { queryParamPage = 1 } = props;
  const { channelPagination } = useChannels({ page: queryParamPage ?? 1 });
  const { current: currentPage = 1, results: channels = [], pages: totalPages = 1 } = channelPagination ?? {};

  return (
    <>
      <Stack
        component="ul"
        spacing={0.5}
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0,
        }}
      >
        {channels.map((channel) => (
          <ChannelListItem key={channel.id} channel={channel} />
        ))}
      </Stack>
      <BasePagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
};

export default ChannelList;
