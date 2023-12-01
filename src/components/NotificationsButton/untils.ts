import { TMessage } from '@/lib/types/chat';
import { TNotification, TNotificationMessage, TNotificationSender } from '@/lib/types/notification';

export const makeNotification = (channelMessage: TMessage): TNotification => {
  const sender: TNotificationSender = {
    ...channelMessage.sender,
    lastActivity: Date.now(),
  };

  const notificationMessage: TNotificationMessage = {
    ...channelMessage,
    sender,
  };

  return {
    id: channelMessage.id,
    message: notificationMessage,
    isRead: false,
    createdAt: channelMessage.createdAt,
  };
};

export const makeTabTitleForNewMessage = (author: string, text: string) => {
  return `* form ${author.slice(0, 10)}: ${text.slice(0, 20)}`;
};
