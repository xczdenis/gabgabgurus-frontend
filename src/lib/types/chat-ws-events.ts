import { TDefaultId } from '@/lib/types/common';

export type TUserJoined = {
  id: TDefaultId;
};

export type TUserBlocking = {
  id: TDefaultId;
  isBlocked: boolean;
};

export type TUserReadMessages = {
  messageIds: TDefaultId[];
  recipientId: TDefaultId;
};
