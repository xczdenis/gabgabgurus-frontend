import { TPaginationData } from '@/lib/types/pagination';
import { TDefaultId } from '@/lib/types/common';

export type TChatContact = {
  id: TDefaultId;
  firstName: string;
  avatar: string;
  isActive: boolean;
  lastActivity: number;
  isBlocked: boolean;
};

export type TChatMessage = {
  id: TDefaultId;
  attachments: unknown[];
  body: string;
  contentType: 'text' | 'image';
  createdAt: number;
  authorId: number;
};

export type TChatMessagePagination = TPaginationData<TChatMessage>;

export type TChat = {
  id: TDefaultId;
  participants: TChatContact[];
  unreadCount: number;
  lastActivity: number;
};

export type TChatPagination = TPaginationData<TChat>;

export type TThread = {
  id: TDefaultId;
  messages: TChatMessage[];
  participantIds: number[];
  type: 'ONE_TO_ONE' | 'GROUP';
  unreadCount: number;
};
