'use client';

import { Avatar, avatarClasses, AvatarGroup } from '@mui/material';
import { useAuth } from '@/lib/hooks/use-auth';
import { getRecipients } from '../../_utils/getRecipients';
import { TProps } from './types';

const ChatAvatar: React.FC<TProps> = (props) => {
  const { chat } = props;
  const { user } = useAuth();
  const recipients = getRecipients(chat.participants, user?.id);

  const groupThread = recipients.length > 1;

  return (
    <AvatarGroup
      max={2}
      sx={{
        [`& .${avatarClasses.root}`]: groupThread
          ? {
              height: 26,
              width: 26,
              '&:nth-of-type(2)': {
                mt: '10px',
              },
            }
          : {
              height: 36,
              width: 36,
            },
      }}
    >
      {recipients.map((recipient) => (
        <Avatar key={recipient.id} src={recipient.avatar} />
      ))}
    </AvatarGroup>
  );
};

export default ChatAvatar;
