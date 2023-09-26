import { TDefaultId } from '@/lib/types/common';

export const enum NotificationType {
  PersonalMessage = 'PERSONAL_MESSAGE',
  GroupMessage = 'GROUP_MESSAGE',
}

export type TNotification = {
  id: TDefaultId;
  createdAt: number;
  avatar: string;
  author: string;
  text: string;
  read: boolean;
  type: NotificationType;
};
