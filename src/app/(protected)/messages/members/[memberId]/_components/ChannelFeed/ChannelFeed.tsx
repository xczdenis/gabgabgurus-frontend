'use client';

import { BaseContainer } from '@/components/BaseContainer';
import { Scrollbar } from '@/components/Scrollbar';
import { withAuthenticatedUser } from '@/lib/hoks/with-authenticated-user';
import { useAppSelector } from '@/lib/hooks/store';
import { Box, Stack } from '@mui/material';
import { useCallback, useEffect, useRef } from 'react';
import { CMLoadMoreButtonMemo } from './_components/CFLoadMoreButton';
import { CFMessages } from './_components/CFMessages';
import { useChannelFeed } from './_hooks/use-channel-feed';
import { useChannelId } from './_hooks/use-channel-id';
import { TProps } from './types';

const ChannelFeed = (props: TProps) => {
  const { currentChannelId, memberProfile, user } = props;
  const { channelId } = useChannelId({ currentChannelId, memberProfile });
  const messages = useAppSelector((state) => state.chat.messages);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const isLoadingPrevious = useRef(false);
  const offset = useRef(0);
  const { downloadMessages } = useChannelFeed(user.id);

  useEffect(() => {
    if (isLoadingPrevious.current) {
      isLoadingPrevious.current = false;
    } else if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'auto' });
    }
    offset.current = messages.length;
  }, [messages.length]);

  const handleLoadMoreClick = useCallback(() => {
    isLoadingPrevious.current = true;
    downloadMessages('append', channelId, offset.current);
  }, [channelId, downloadMessages]);

  return (
    <Scrollbar sx={{ height: '100%' }}>
      <Box ref={messagesContainerRef}>
        <CMLoadMoreButtonMemo onClick={handleLoadMoreClick} />
        <BaseContainer>
          <Stack spacing={2} sx={{ p: 3 }}>
            {messages && (
              <CFMessages
                userId={user.id}
                messages={messages}
                lastMessageRef={lastMessageRef}
                messagesContainerRef={messagesContainerRef}
              />
            )}
          </Stack>
        </BaseContainer>
      </Box>
    </Scrollbar>
  );
};

export default withAuthenticatedUser(ChannelFeed);
