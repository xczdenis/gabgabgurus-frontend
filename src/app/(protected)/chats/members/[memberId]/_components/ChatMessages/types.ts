import { StackProps } from '@mui/material';
import { TChat } from '@/lib/types/chat';

export type TAuthor = {
  name: string;
  avatar: string;
  isUser: boolean;
};

export type TOwnProps = {
  chat: TChat;
} & StackProps;

export type TProps = TOwnProps;
