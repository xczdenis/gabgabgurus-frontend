import { StackProps } from '@mui/material';
import { TChat } from '@/lib/types/chat';

export type TOwnProps = {
  chat: TChat;
} & StackProps;

export type TProps = TOwnProps;
