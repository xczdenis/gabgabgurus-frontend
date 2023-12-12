import { TDefaultId } from '@/lib/types/common';
import { createResourceId } from '@/lib/utils/create-resource-id';
import { memberProfiles } from '@/mocks/data/member-profiles';
import { mockAdminResponse } from '@/mocks/data/users';

const now = new Date();

export type TChannelContactResponse = {
  id: TDefaultId;
  first_name: string;
  avatar: string;
  last_login: number | null;
  is_active: boolean;
  is_blocked: boolean;
  blocked_for: boolean;
};

const makeChannelContact = (params: Partial<TChannelContactResponse>): TChannelContactResponse => {
  return {
    id: createResourceId(),
    first_name: 'Petr Aganezov',
    avatar: '/assets/avatars/avatar10.png',
    last_login: now.getTime(),
    is_active: true,
    is_blocked: false,
    blocked_for: false,
    ...params,
  };
};

export const channelContacts: TChannelContactResponse[] = [
  makeChannelContact(mockAdminResponse),
  makeChannelContact(memberProfiles[1]),
  makeChannelContact(memberProfiles[2]),
  makeChannelContact(memberProfiles[3]),
  makeChannelContact(memberProfiles[4]),
  makeChannelContact(memberProfiles[5]),
  makeChannelContact(memberProfiles[6]),
  makeChannelContact(memberProfiles[7]),
  makeChannelContact(memberProfiles[8]),
  makeChannelContact(memberProfiles[9]),
  makeChannelContact(memberProfiles[10]),
];
