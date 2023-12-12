import { TChannelBaseInfoResponse, TChannelResponse } from '@/lib/types/chat-response';
import { channelContacts } from '@/mocks/data/channel-contacts';
import { messagesInChannel1, messagesInChannel2, messagesInChannel3, messagesInChannel4 } from '@/mocks/data/messages';
import { mockAdmin } from '@/mocks/data/users';
import { subHours, subMinutes, subSeconds } from 'date-fns';

const now = new Date();

export const channelsBaseInfo: TChannelBaseInfoResponse[] = [
  {
    id: 1,
    owner: mockAdmin.firstName,
    createdAt: subHours(now, 2).getTime() / 1000,
  },
  {
    id: 2,
    owner: mockAdmin.firstName,
    createdAt: subHours(now, 3).getTime() / 1000,
  },
  {
    id: 3,
    owner: mockAdmin.firstName,
    createdAt: subHours(now, 4).getTime() / 1000,
  },
  {
    id: 4,
    owner: mockAdmin.firstName,
    createdAt: subHours(now, 4).getTime() / 1000,
  },
];

export const channels: TChannelResponse[] = [
  {
    id: channelsBaseInfo[0].id,
    participants: [channelContacts[2]],
    unread_count: 1,
    last_activity: now.getTime() / 1000,
    last_message: messagesInChannel1[messagesInChannel1.length - 1].text,
  },
  {
    id: channelsBaseInfo[1].id,
    participants: [channelContacts[3]],
    unread_count: 0,
    last_activity: subSeconds(now, 5).getTime() / 1000,
    last_message: messagesInChannel2[messagesInChannel2.length - 1].text,
  },
  {
    id: channelsBaseInfo[2].id,
    participants: [channelContacts[4]],
    unread_count: 3,
    last_activity: subMinutes(now, 20).getTime() / 1000,
    last_message: messagesInChannel3[messagesInChannel3.length - 1].text,
  },
  {
    id: channelsBaseInfo[3].id,
    participants: [channelContacts[5]],
    unread_count: 0,
    last_activity: subHours(now, 1).getTime() / 1000,
    last_message: messagesInChannel4[messagesInChannel4.length - 1].text,
  },
];
