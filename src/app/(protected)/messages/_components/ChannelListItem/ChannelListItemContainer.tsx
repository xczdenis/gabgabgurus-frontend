'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import { TChannel } from '@/lib/types/chat';
import { buildChatUrl } from '@/lib/utils/build-chat-url';
import { getRecipient } from '@/lib/utils/get-chat-recipient';
import { Stack } from '@mui/material';
import Link from 'next/link';

type TProps = {
  children: React.ReactNode;
  chat: TChannel;
};

export const ChannelListItemContainer = (props: TProps) => {
  const { children, chat } = props;
  const { user } = useAuth();
  const recipient = getRecipient(chat.participants, user);
  const chatItemUrl = buildChatUrl(recipient?.id);

  return (
    <Stack component="li">
      <Stack
        component={Link}
        href={chatItemUrl}
        direction="row"
        spacing={2}
        sx={{
          textDecoration: 'none',
          color: 'inherit',
          borderRadius: 2.5,
          cursor: 'pointer',
          p: 2,
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
