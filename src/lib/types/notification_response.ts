import { TDefaultId } from '@/lib/types/common';
import { TPagePagination } from '@/lib/types/pagination';

export type TNotificationSenderResponse = {
  id: TDefaultId;
  first_name: string;
  avatar: string;
  last_activity: number;
};

export type TNotificationMessageResponse = {
  id: TDefaultId;
  text: string;
  sender: TNotificationSenderResponse;
};

export type TNotificationResponse = {
  id: TDefaultId;
  message: TNotificationMessageResponse;
  is_read: boolean;
  createdAt: number;
};

export type TNotificationPaginationResponse = TPagePagination<TNotificationResponse>;
