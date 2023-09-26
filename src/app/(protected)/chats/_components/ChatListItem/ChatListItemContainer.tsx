'use client';

import { Stack } from '@mui/material';
import Link from 'next/link';
import { TChat } from '@/lib/types/chat';
import { useAuth } from '@/lib/hooks/use-auth';
import { getRecipient } from '@/lib/utils/get-chat-recipient';
import { buildChatUrl } from '@/lib/utils/build-chat-url';

type TProps = {
  children: React.ReactNode;
  chat: TChat;
};

export const ChatListItemContainer: React.FC<TProps> = (props) => {
  const { children, chat } = props;
  const { user } = useAuth();
  const recipient = getRecipient(chat.participants, user);
  const chatItemUrl = buildChatUrl(recipient);

  return (
    <Stack component="li">
      <Stack
        component={Link}
        href={chatItemUrl}
        target="_blank"
        direction="row"
        spacing={2}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          borderRadius: 2.5,
          cursor: 'pointer',
          px: 3,
          py: 2,
          '&:hover': {
            backgroundColor: 'action.hover',
          },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};
