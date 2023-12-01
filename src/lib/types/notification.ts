import { TDefaultId } from '@/lib/types/common';
import { TPagePagination } from '@/lib/types/pagination';

export const enum NotificationTypes {
  PersonalMessage = 'PERSONAL_MESSAGE',
  GroupMessage = 'GROUP_MESSAGE',
}

export type TNotificationSender = {
  id: TDefaultId;
  firstName: string;
  avatar: string;
  lastActivity: number;
};

export type TNotificationMessage = {
  id: TDefaultId;
  text: string;
  sender: TNotificationSender;
};

export type TNotification = {
  id: TDefaultId;
  message: TNotificationMessage;
  isRead: boolean;
  createdAt: number;
};

export type TNotificationPagination = TPagePagination<TNotification>;
