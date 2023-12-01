import { TChannelResponse } from '@/lib/types/chat-response';
import { channelContacts } from '@/mocks/data/channel-contacts';

const now = new Date();

export const channels: TChannelResponse[] = [
  {
    id: 1,
    participants: [channelContacts[1]],
    unread_count: 1,
    last_activity: now.getTime(),
    last_message: 'Hello 1!',
  },
  {
    id: 2,
    participants: [channelContacts[2]],
    unread_count: 2,
    last_activity: now.getTime(),
    last_message: 'Hello 2!',
  },
  {
    id: 3,
    participants: [channelContacts[3]],
    unread_count: 3,
    last_activity: now.getTime(),
    last_message: 'Hello 3!',
  },
  {
    id: 4,
    participants: [channelContacts[4]],
    unread_count: 4,
    last_activity: now.getTime(),
    last_message: 'Hello 4!',
  },
  {
    id: 5,
    participants: [channelContacts[5]],
    unread_count: 5,
    last_activity: now.getTime(),
    last_message: 'Hello 5!',
  },
  {
    id: 6,
    participants: [channelContacts[6]],
    unread_count: 6,
    last_activity: now.getTime(),
    last_message: 'Hello 6!',
  },
  {
    id: 7,
    participants: [channelContacts[7]],
    unread_count: 7,
    last_activity: now.getTime(),
    last_message: 'Hello 7!',
  },
  {
    id: 8,
    participants: [channelContacts[8]],
    unread_count: 8,
    last_activity: now.getTime(),
    last_message: 'Hello 8!',
  },
];
