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

export const memberProfiles: TMemberProfileResponse[] = [
  makeMember({
    ...mockAdminResponse,
    last_activity: now.getTime(),
    is_blocked: false,
  }),
  makeMember({
    id: 2,
    avatar: '/assets/avatars/avatar11.png',
    last_activity: subHours(now, 2).getTime(),
    first_name: 'Marcus Finn',
    is_blocked: true,
  }),
  makeMember({
    id: 3,
    avatar: '/assets/avatars/avatar08.png',
    last_activity: subMinutes(now, 15).getTime(),
    country: getRandomCountry(),
    first_name: 'Christina Darrin',
    is_blocked: false,
  }),
  makeMember({
    id: 4,
    avatar: '/assets/avatars/avatar07.png',
    last_activity: now.getTime(),
    first_name: 'Fran Perez',
    is_blocked: true,
  }),
  makeMember({
    id: 5,
    avatar: '/assets/avatars/avatar10.png',
    last_activity: now.getTime(),
    first_name: 'Jie Yan Song',
    is_blocked: false,
  }),
  makeMember({
    id: 6,
    avatar: '/assets/avatars/avatar12.png',
    last_activity: subHours(now, 1).getTime(),
    first_name: 'Miron Vitold',
    is_blocked: false,
  }),
  makeMember({
    id: 7,
    avatar: '/assets/avatars/avatar16.png',
    last_activity: subHours(now, 6).getTime(),
    first_name: 'Penjani Inyene',
    is_blocked: false,
  }),
  makeMember({
    id: 8,
    avatar: '/assets/avatars/avatar15.png',
    last_activity: now.getTime(),
    first_name: 'Omar Darobe',
    is_blocked: false,
  }),
  makeMember({
    id: 9,
    avatar: '/assets/avatars/avatar18.png',
    last_activity: now.getTime(),
    first_name: 'Siegbert Gottfried',
    is_blocked: false,
  }),
  makeMember({
    id: 10,
    avatar: '/assets/avatars/avatar08.png',
    last_activity: now.getTime(),
    first_name: 'Iulia Albu',
    is_blocked: false,
  }),
  makeMember({
    id: 11,
    avatar: '/assets/avatars/avatar13.png',
    last_activity: now.getTime(),
    first_name: 'Nasimiyu Danai',
    is_blocked: false,
  }),
];

export const mockProfileAdmin: TUserProfile = convertKeysSnakeToCamel({ ...memberProfiles[0], email: mockAdmin.email });
