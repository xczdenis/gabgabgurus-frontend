import { MessageStatuses } from '@/config';
import { TDefaultId } from '@/lib/types/common';
import { TLimitOffsetPagination, TPagePagination } from '@/lib/types/pagination';

export type TChannelContact = {
  id: TDefaultId;
  firstName: string;
  avatar: string;
  lastLogin: number | null;
  isActive: boolean;
  isBlocked: boolean;
  blockedFor: boolean;
};

export type TMessageSender = {
  id: TDefaultId;
  firstName: string;
  avatar: string;
};

export type TMessage = {
  id: TDefaultId;
  text: string;
  createdAt: number;
  sender: TMessageSender;
  status: MessageStatuses;
};

export type TMessagePagination = TLimitOffsetPagination<TMessage>;

export type TChannelBaseInfo = {
  id: TDefaultId;
  owner: string;
  createdAt: number;
};

export type TChannel = {
  id: TDefaultId;
  participants: TChannelContact[];
  unreadCount: number;
  lastActivity: number;
  lastMessage: string;
};

export type TChannelPagination = TPagePagination<TChannel>;
