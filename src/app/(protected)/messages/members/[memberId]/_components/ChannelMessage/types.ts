import { MessageStatuses } from '@/config';

export type TOwnProps = {
  authorAvatar?: string;
  authorName?: string;
  text: string;
  createdAt: number;
  isMine: boolean;
  status: MessageStatuses;
};

export type TProps = TOwnProps;
