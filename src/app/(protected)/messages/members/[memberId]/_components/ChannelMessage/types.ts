import { MessageStatuses } from '@/config';

export type TOwnProps = {
  authorAvatar?: string;
  authorName?: string;
  text: string;
  createdAt: number;
  isMine: boolean;
  status: MessageStatuses;
  messagesContainerRef: React.RefObject<HTMLDivElement | null>;
};

export type TProps = TOwnProps;
