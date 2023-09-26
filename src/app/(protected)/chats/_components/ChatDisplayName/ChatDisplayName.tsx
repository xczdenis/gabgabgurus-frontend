'use client';

import { Typography } from '@mui/material';
import { TProps } from './types';
import { useAuth } from '@/lib/hooks/use-auth';
import { getRecipients } from '../../_utils/getRecipients';
import { getDisplayName } from '../../_utils/getDisplayName';

const ChatDisplayName: React.FC<TProps> = (props) => {
  const { chat } = props;
  const { user } = useAuth();
  const recipients = getRecipients(chat.participants, user?.id);
  const displayName = getDisplayName(recipients);

  return (
    <Typography noWrap variant="subtitle2">
      {displayName}
    </Typography>
  );
};

export default ChatDisplayName;
