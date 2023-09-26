import { TChatResponse } from '@/lib/types/backend';
import { contacts } from '@/mocks/data/contacts';

const now = new Date();

export const chats: TChatResponse[] = [
  {
    id: 100,
    participants: [contacts[0], contacts[1]],
    unread_count: 1,
    last_activity: now.getTime(),
  },
  {
    id: 200,
    participants: [
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4],
      contacts[5],
      contacts[6],
      contacts[7],
      contacts[10],
    ],
    unread_count: 2,
    last_activity: now.getTime(),
  },
  {
    id: 300,
    participants: [contacts[0], contacts[3]],
    unread_count: 3,
    last_activity: now.getTime(),
  },
  {
    id: 400,
    participants: [contacts[0], contacts[4]],
    unread_count: 4,
    last_activity: now.getTime(),
  },
  {
    id: 500,
    participants: [contacts[0], contacts[5]],
    unread_count: 5,
    last_activity: now.getTime(),
  },
  {
    id: 600,
    participants: [contacts[0], contacts[6]],
    unread_count: 6,
    last_activity: now.getTime(),
  },
  {
    id: 700,
    participants: [contacts[0], contacts[7]],
    unread_count: 7,
    last_activity: now.getTime(),
  },
  {
    id: 800,
    participants: [contacts[0], contacts[8]],
    unread_count: 8,
    last_activity: now.getTime(),
  },
];
