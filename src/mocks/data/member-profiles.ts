import { TUserProfile } from '@/lib/types/user';
import { TMemberProfileResponse } from '@/lib/types/user-response';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { createResourceId } from '@/lib/utils/create-resource-id';
import { getRandomCountry } from '@/mocks/data/countries';
import { getRandomHobbies } from '@/mocks/data/hobbies';
import { getRandomUserLanguages } from '@/mocks/data/languages';
import { mockAdmin, mockAdminResponse } from '@/mocks/data/users';
import { subHours, subMinutes } from 'date-fns';

const now = new Date();
const nowTs = now.getTime();
const twoHoursAgo = subHours(now, 2).getTime();
const oneHourAgo = subHours(now, 1).getTime();
const sixHoursAgo = subHours(now, 6).getTime();
const fifteenMinutesAgo = subMinutes(now, 15).getTime();

const makeMember = (params: Partial<TMemberProfileResponse>): TMemberProfileResponse => {
  return {
    id: createResourceId(),
    first_name: 'Petr Aganezov',
    country: getRandomCountry(),
    about_me: "Hi! I'm Alex, and I'm looking to improve my Spanish. I love traveling and cooking. What about you?",
    speaks: getRandomUserLanguages(4, { is_speaking: true }),
    learning: getRandomUserLanguages(4, { is_learning: true }),
    hobbies: getRandomHobbies(4),
    avatar: '/assets/avatars/avatar10.png',
    is_blocked: false,
    blocked_for: false,
    last_activity: now.getTime(),
    ...params,
  };
};

const membersData: Partial<TMemberProfileResponse>[] = [
  {
    ...mockAdminResponse,
    last_activity: nowTs,
    is_blocked: false,
  },
  {
    id: 2,
    avatar: '/assets/avatars/avatar11.png',
    last_activity: twoHoursAgo,
    first_name: 'Marcus Finn',
    is_blocked: true,
  },
  {
    id: 3,
    avatar: '/assets/avatars/avatar08.png',
    last_activity: fifteenMinutesAgo,
    first_name: 'Christina Darrin',
  },
  {
    id: 4,
    avatar: '/assets/avatars/avatar07.png',
    last_activity: nowTs,
    first_name: 'Fran Perez',
    is_blocked: true,
  },
  {
    id: 5,
    avatar: '/assets/avatars/avatar10.png',
    last_activity: nowTs,
    first_name: 'Jie Yan Song',
  },
  {
    id: 6,
    avatar: '/assets/avatars/avatar12.png',
    last_activity: oneHourAgo,
    first_name: 'Miron Vitold',
  },
  {
    id: 7,
    avatar: '/assets/avatars/avatar16.png',
    last_activity: sixHoursAgo,
    first_name: 'Penjani Inyene',
  },
  {
    id: 8,
    avatar: '/assets/avatars/avatar15.png',
    last_activity: nowTs,
    first_name: 'Omar Darobe',
  },
  {
    id: 9,
    avatar: '/assets/avatars/avatar18.png',
    last_activity: nowTs,
    first_name: 'Siegbert Gottfried',
  },
  {
    id: 10,
    avatar: '/assets/avatars/avatar08.png',
    last_activity: nowTs,
    first_name: 'Iulia Albu',
  },
  {
    id: 11,
    avatar: '/assets/avatars/avatar13.png',
    last_activity: nowTs,
    first_name: 'Nasimiyu Danai',
  },
];

export const memberProfiles: TMemberProfileResponse[] = membersData.map(makeMember);

export const mockProfileAdmin: TUserProfile = convertKeysSnakeToCamel({ ...memberProfiles[0], email: mockAdmin.email });
