import { TChat } from '@/lib/types/chat';
import { TMemberProfile } from '@/lib/types/user';

export type TOwnProps = {
  chat: TChat;
  recipient: TMemberProfile;
};

export type TProps = TOwnProps;
