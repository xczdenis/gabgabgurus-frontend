import { TChannel } from '@/lib/types/chat';
import { TMemberProfile } from '@/lib/types/user';

export type TOwnProps = {
  channel: TChannel | null;
  memberProfile: TMemberProfile;
};

export type TProps = TOwnProps;
