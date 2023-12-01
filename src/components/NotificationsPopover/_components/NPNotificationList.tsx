'use client';

import { useAppSelector } from '@/lib/hooks/store';
import { List } from '@mui/material';
import { NPNotificationListItemMemo } from './NPNotificationListItem';

export const NPNotificationList = () => {
  const notifications = useAppSelector((state) => state.notifications.notifications);

  return (
    <List disablePadding>
      {notifications.map((notification) => (
        <NPNotificationListItemMemo key={notification.message.id} notification={notification} />
      ))}
    </List>
  );
};
