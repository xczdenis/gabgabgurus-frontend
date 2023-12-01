import { TWithAuthenticatedUserProps } from '@/lib/hoks/with-authenticated-user';
import { TDefaultId } from '@/lib/types/common';
import { TMemberProfile } from '@/lib/types/user';

export type TOwnProps = {
  memberProfile: TMemberProfile;
  currentChannelId?: TDefaultId;
};

export type TProps = TOwnProps & TWithAuthenticatedUserProps;
