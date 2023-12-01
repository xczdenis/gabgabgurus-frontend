// import { TMessageResponse } from '@/lib/types/chat-response';
// import { createResourceId } from '@/lib/utils/create-resource-id';
// import { channelContacts } from '@/mocks/data/channel-contacts';
//
// const now = new Date();
//
// const makeMessage = (params: Partial<TMessageResponse>): TMessageResponse => {
//   return {
//     id: createResourceId(),
//     text: 'Hello !',
//     created_at: now.getTime(),
//     sender: channelContacts[1],
//     ...params,
//   };
// };
//
// export const messages: TMessageResponse[] = [
//   makeMessage({
//     id: 1,
//     text: 'Hi there!',
//     sender: channelContacts[1],
//   }),
//   makeMessage({
//     id: 2,
//     text: 'Hi!',
//     sender: channelContacts[0],
//   }),
//   makeMessage({
//     id: 3,
//     text: "How's it going?",
//     sender: channelContacts[1],
//   }),
//   makeMessage({
//     id: 4,
//     text: 'Whats news?',
//     sender: channelContacts[1],
//   }),
//   makeMessage({
//     id: 5,
//     text: 'Fine. you?',
//     sender: channelContacts[0],
//   }),
// ];
