import { TDefaultId } from '@/lib/types/common';
import { createResourceId } from '@/lib/utils/create-resource-id';
import { members } from '@/mocks/data/members';

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
  makeChannelContact(members[0]),
  makeChannelContact(members[1]),
  makeChannelContact(members[2]),
  makeChannelContact(members[3]),
  makeChannelContact(members[4]),
  makeChannelContact(members[5]),
  makeChannelContact(members[6]),
  makeChannelContact(members[7]),
  makeChannelContact(members[8]),
  makeChannelContact(members[9]),
  makeChannelContact(members[10]),
];
