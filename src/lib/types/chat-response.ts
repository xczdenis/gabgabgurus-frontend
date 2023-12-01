import { MessageStatuses } from '@/config';
import { TDefaultId } from '@/lib/types/common';
import { TLimitOffsetPagination, TPagePagination } from '@/lib/types/pagination';

export type TChannelContactResponse = {
  id: TDefaultId;
  first_name: string;
  avatar: string;
  last_login: number | null;
  is_active: boolean;
  is_blocked: boolean;
  blocked_for: boolean;
};

export type TMessageSenderResponse = {
  id: TDefaultId;
  first_name: string;
  avatar: string;
};

export type TMessageResponse = {
  id: TDefaultId;
  text: string;
  created_at: number;
  sender: TMessageSenderResponse;
  status: MessageStatuses;
};

export type TMessagePaginationResponse = TLimitOffsetPagination<TMessageResponse>;

export type TChannelBaseInfoResponse = {
  id: TDefaultId;
  owner: string;
  createdAt: number;
};

export type TChannelResponse = {
  id: TDefaultId;
  participants: TChannelContactResponse[];
  unread_count: number;
  last_activity: number;
  last_message: string;
};

export type TChannelPaginationResponse = TPagePagination<TChannelResponse>;
