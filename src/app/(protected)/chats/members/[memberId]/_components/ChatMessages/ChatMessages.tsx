'use client';

import { Box, Button, Stack } from '@mui/material';
import { TProps } from './types';
import { ChatMessage } from '../ChatMessage';
import { useAuth } from '@/lib/hooks/use-auth';
import { BaseContainer } from '@/components/BaseContainer';
import { getAuthor } from './utils';
import { Scrollbar } from '@/components/Scrollbar';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/chat';

const ChatMessages: React.FC<TProps> = (props) => {
  const { chat, ...other } = props;
  const { user } = useAuth();
  const { messages, next } = useAppSelector((state) => state.chat);
  const [page, setPage] = useState(1);
  const [isLoadingPrevious, setIsLoadingPrevious] = useState(false);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      if (isLoadingPrevious) {
        setIsLoadingPrevious(false);
      } else if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: 'auto' });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [messages]
  );

  useEffect(() => {
    dispatch(thunks.fetchMessages(chat.id, { page }));
  }, [chat.id, dispatch, page]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
    setIsLoadingPrevious(true);
  };

  if (!user) {
    return null;
  }

  return (
    <Scrollbar sx={{ height: '100%' }}>
      {next && (
        <Box my={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="text" size="small" onClick={handleLoadMoreClick}>
            Load more ...
          </Button>
        </Box>
      )}
      <BaseContainer>
        <Stack spacing={2} sx={{ p: 3 }} {...other}>
          {messages.map((message, index) => {
            const author = getAuthor(message, chat.participants, user);
            const isLastMessage = index === messages.length - 1;

            return (
              <Box ref={isLastMessage ? lastMessageRef : null} key={message.id}>
                <ChatMessage
                  authorAvatar={author.avatar}
                  authorName={author.name}
                  body={message.body}
                  contentType={message.contentType}
                  createdAt={message.createdAt}
                  messagePosition={author.isUser ? 'right' : 'left'}
                />
              </Box>
            );
          })}
        </Stack>
      </BaseContainer>
    </Scrollbar>
  );
};

export default ChatMessages;
