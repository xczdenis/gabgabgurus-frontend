'use client';

import { TNotification } from '@/lib/types/notification';
import { buildChatUrl } from '@/lib/utils/build-chat-url';
import { ListItem } from '@mui/material';
import NextLink from 'next/link';
import React, { memo } from 'react';
import { NPPersonalMessage } from './NPPersonalMessage';
import { NPRemoveToolTip } from './NPRemoveToolTip';

type TProps = {
  notification: TNotification;
};

export const NPNotificationListItem = (props: TProps) => {
  const { notification } = props;

  return (
    <ListItem
      divider
      component={NextLink}
      href={buildChatUrl(notification.message.sender.id)}
      target="_blank"
      sx={{
        alignItems: 'flex-start',
        '&:hover': {
          backgroundColor: 'action.hover',
        },
        '& .MuiListItemSecondaryAction-root': {
          top: '24%',
        },
      }}
      secondaryAction={<NPRemoveToolTip notificationId={notification.id} />}
    >
      <NPPersonalMessage notification={notification} />
    </ListItem>
  );
};

export const NPNotificationListItemMemo = memo(NPNotificationListItem);
