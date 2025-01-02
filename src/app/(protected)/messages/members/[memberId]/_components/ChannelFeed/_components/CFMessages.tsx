'use client';

import { TMessage } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { Box } from '@mui/material';
import { ChannelMessageMemo } from '../../ChannelMessage';

type TProps = {
  userId: TDefaultId;
  messages: TMessage[];
  lastMessageRef: React.RefObject<HTMLDivElement | null>;
  messagesContainerRef: React.RefObject<HTMLDivElement | null>;
};

export const CFMessages = (props: TProps) => {
  const { userId, messages, lastMessageRef, messagesContainerRef } = props;

  return (
    <>
      {messages.map((message, index) => {
        const isLastMessage = index === messages.length - 1;
        return (
          <Box ref={isLastMessage ? lastMessageRef : null} key={message.id}>
            <ChannelMessageMemo
              authorAvatar={message.sender.avatar}
              authorName={message.sender.firstName}
              isMine={userId === message.sender.id}
              text={message.text}
              createdAt={message.createdAt}
              status={message.status}
              messagesContainerRef={messagesContainerRef}
            />
          </Box>
        );
      })}
    </>
  );
};
