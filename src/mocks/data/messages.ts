import { MessageStatuses } from '@/config';
import { TMessageResponse, TMessageSenderResponse } from '@/lib/types/chat-response';
import { createResourceId } from '@/lib/utils/create-resource-id';
import { channelContacts } from '@/mocks/data/channel-contacts';
import { memberProfiles } from '@/mocks/data/member-profiles';
import { mockAdminResponse } from '@/mocks/data/users';
import { subDays, subHours, subMinutes, subSeconds, subWeeks } from 'date-fns';

const now = new Date();

const makeMessageSender = (params?: Partial<TMessageSenderResponse>): TMessageSenderResponse => {
  const memberProfile = memberProfiles[1];
  return {
    id: memberProfile.id,
    avatar: memberProfile.avatar,
    first_name: memberProfile.first_name,
    ...params,
  };
};

const makeMessage = (params?: Partial<TMessageResponse>): TMessageResponse => {
  return {
    id: createResourceId(),
    text: "Hi! I'm looking to improve my Spanish. I love traveling and cooking. What about you?",
    sender: makeMessageSender(),
    created_at: subSeconds(now, 1).getTime() / 1000,
    status: MessageStatuses.Delivered,
    ...params,
  };
};

export const messagesInChannel1: TMessageResponse[] = [
  makeMessage({
    id: 100,
    text: 'Lets gab?',
    sender: mockAdminResponse,
    created_at: subSeconds(now, 1).getTime() / 1000,
  }),
  makeMessage({
    id: 200,
    text: 'Am ok',
    sender: mockAdminResponse,
    created_at: subSeconds(now, 15).getTime() / 1000,
  }),
  makeMessage({
    id: 300,
    text: 'Fine. you?',
    sender: channelContacts[2],
    created_at: subMinutes(now, 1).getTime() / 1000,
  }),
  makeMessage({
    id: 400,
    text: `Whats news, ${channelContacts[2].first_name}?`,
    sender: mockAdminResponse,
    status: MessageStatuses.Read,
    created_at: subMinutes(now, 5).getTime() / 1000,
  }),
  makeMessage({
    id: 500,
    text: "How's it going?",
    sender: mockAdminResponse,
    status: MessageStatuses.Read,
    created_at: subHours(now, 2).getTime() / 1000,
  }),
  makeMessage({
    id: 600,
    text: `Hi, ${mockAdminResponse.first_name}!`,
    sender: channelContacts[2],
    status: MessageStatuses.Read,
    created_at: subDays(now, 3).getTime() / 1000,
  }),
  makeMessage({
    id: 700,
    text: `Hi, ${channelContacts[2].first_name}!`,
    sender: mockAdminResponse,
    status: MessageStatuses.Read,
    created_at: subWeeks(now, 1).getTime() / 1000,
  }),
];

export const messagesInChannel2: TMessageResponse[] = [
  makeMessage({
    id: 800,
    text: `Ну привет, ${mockAdminResponse.first_name}!`,
    sender: channelContacts[3],
    status: MessageStatuses.Read,
    created_at: subSeconds(now, 2).getTime() / 1000,
  }),
  makeMessage({
    id: 900,
    text: `Привет, ${channelContacts[3].first_name}!`,
    sender: mockAdminResponse,
    created_at: subSeconds(now, 1).getTime() / 1000,
  }),
];

export const messagesInChannel3: TMessageResponse[] = [
  makeMessage({
    id: 1000,
    text: `Добрый день, ${mockAdminResponse.first_name}!`,
    sender: channelContacts[4],
    created_at: subDays(now, 1).getTime() / 1000,
  }),
];

export const messagesInChannel4: TMessageResponse[] = [
  makeMessage({
    id: 1200,
    text: `Я на связи ${channelContacts[5].first_name}`,
    sender: mockAdminResponse,
    status: MessageStatuses.Read,
    created_at: subSeconds(now, 1).getTime() / 1000,
  }),
  makeMessage({
    id: 1300,
    text: `Когда на связь выйдешь?`,
    sender: channelContacts[5],
    created_at: subMinutes(now, 1).getTime() / 1000,
  }),
  makeMessage({
    id: 1400,
    text: `Хай, ${mockAdminResponse.first_name}!`,
    sender: channelContacts[5],
    created_at: subMinutes(now, 2).getTime() / 1000,
  }),
];

export const messages: TMessageResponse[] = [
  ...messagesInChannel1,
  ...messagesInChannel2,
  ...messagesInChannel3,
  ...messagesInChannel4,
];

export const messagesByChannelId: Record<string, TMessageResponse[]> = {
  1: messagesInChannel1,
  2: messagesInChannel2,
  3: messagesInChannel3,
  4: messagesInChannel4,
};
