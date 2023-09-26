import { TThread } from '@/lib/types/chat';
import { subDays, subHours, subMinutes } from 'date-fns';

const now = new Date();

export const threads: TThread[] = [
  {
    id: 1,
    messages: [
      {
        id: 1,
        attachments: [],
        body: "Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?",
        contentType: 'text',
        createdAt: subDays(subHours(now, 10), 4).getTime(),
        authorId: 1,
      },
      {
        id: 2,
        attachments: [],
        body: 'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
        contentType: 'text',
        createdAt: subDays(subHours(now, 2), 4).getTime(),
        authorId: 7,
      },
      {
        id: 3,
        attachments: [],
        body: "Well, it's a really easy one, I'm sure we can make it half of the price.",
        contentType: 'text',
        createdAt: subHours(now, 5).getTime(),
        authorId: 1,
      },
      {
        id: 4,
        attachments: [],
        body: "Then why don't you make it if it's that easy? Sorry, I'm not interested, have a fantastic day Adam!",
        contentType: 'text',
        createdAt: subHours(now, 3).getTime(),
        authorId: 7,
      },
      {
        id: 5,
        attachments: [],
        body: 'Last offer, $25 per hour',
        contentType: 'text',
        createdAt: subHours(now, 2).getTime(),
        authorId: 1,
      },
      {
        id: 6,
        attachments: [],
        body: '/assets/covers/minimal-1-4x3-small.png',
        contentType: 'image',
        createdAt: subHours(now, 1).getTime(),
        authorId: 7,
      },
    ],
    participantIds: [7, 6],
    type: 'ONE_TO_ONE',
    unreadCount: 2,
  },
  {
    id: 2,
    messages: [
      {
        id: 1,
        attachments: [],
        body: 'Hey, would you like to collaborate?',
        contentType: 'text',
        createdAt: subDays(subMinutes(now, 6), 3).getTime(),
        authorId: 11,
      },
      {
        id: 2,
        attachments: [],
        body: 'Hi, Merrile!',
        contentType: 'text',
        createdAt: subDays(subMinutes(now, 5), 3).getTime(),
        authorId: 1,
      },
      {
        id: 3,
        attachments: [],
        body: 'Hello everyone 😀',
        contentType: 'text',
        createdAt: subDays(subMinutes(now, 2), 1).getTime(),
        authorId: 7,
      },
    ],
    participantIds: [7, 11, 1],
    type: 'GROUP',
    unreadCount: 0,
  },
];
