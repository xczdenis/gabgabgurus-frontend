import { TChat } from '@/lib/types/chat';
import { StackProps } from '@mui/material';

export type TOwnProps = {
  chat: TChat;
} & StackProps;

export type TProps = TOwnProps;
