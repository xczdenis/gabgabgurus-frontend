// import { paginationConfig } from '@/config';
// import { TChannel, TChannelBaseInfo, TChannelPagination, TMessage, TMessagePagination } from '@/lib/types/chat';
// import { TChannelPaginationResponse } from '@/lib/types/chat-response';
// import { TDefaultId } from '@/lib/types/common';
// import { TPageNumberPaginationParams } from '@/lib/types/pagination';
// import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
// import { channelContacts } from '@/mocks/data/channel-contacts';
// import { messages } from '@/mocks/data/messages';
// import { messages } from '@/mocks/data/messages';
// import { AbstractChannelGateway } from '@/modules/data-gateways/interfaces';
// import { TGetMessagesParams } from '@/modules/data-gateways/interfaces/chat-gateway';
//
// class HttpError extends Error {
//   status: number;
//
//   constructor(message: string, status: number) {
//     super(message);
//     this.status = status;
//   }
// }
//
// export class MockChatGateway extends AbstractChannelGateway {
//   constructor() {
//     super();
//   }
//   public async getChannels(params?: TPageNumberPaginationParams): Promise<TChannelPagination> {
//     let page = 1;
//     let count = paginationConfig.searchPageSize;
//     if (params) {
//       page = params.page ? parseInt(String(params.page)) : page;
//       count = params.count ? parseInt(String(params.count)) : count;
//     }
//
//     const pages = Math.ceil(messages.length / count);
//     const start = (page - 1) * count;
//     const end = start + count;
//
//     const next = page < pages ? String(page + 1) : null;
//     const prev = page > 1 ? String(page - 1) : null;
//     const current = page;
//
//     const response: TChannelPaginationResponse = {
//       count: messages.length,
//       next,
//       previous: prev,
//       current,
//       pages,
//       results: messages.slice(start, end),
//     };
//
//     return convertKeysSnakeToCamel(response);
//   }
//
//   public async getChannelsByMemberId(memberId: number): Promise<TChannel> {
//     const chat = messages[memberId];
//     if (!chat) {
//       throw new HttpError('Chat not found', 404);
//     }
//     return convertKeysSnakeToCamel(chat);
//   }
//
//   public async getMessages(params?: TGetMessagesParams): Promise<TMessagePagination> {
//     let page = 1;
//     let count = paginationConfig.messagesPageSize;
//     if (params) {
//       page = params.offset ? parseInt(String(params.offset)) : page;
//       count = params.limit ? parseInt(String(params.limit)) : count;
//     }
//
//     const allData = [...messages].reverse();
//     const pages = Math.ceil(allData.length / count);
//     const start = (page - 1) * count;
//     const end = start + count;
//
//     const next = page < pages ? page + 1 : null;
//     const prev = page > 1 ? page - 1 : null;
//     const current = page;
//
//     const response = {
//       count: allData.length,
//       next: String(next),
//       previous: String(prev),
//       current,
//       pages,
//       results: allData.slice(start, end),
//     };
//
//     return convertKeysSnakeToCamel(response);
//   }
//
//   public async sendMessage(channelId: TDefaultId, text: string): Promise<TMessage> {
//     const now = new Date();
//
//     return {
//       id: 34,
//       text: text,
//       createdAt: now.getTime(),
//       isMine: true,
//       sender: { ...channelContacts[0], name: channelContacts[0].first_name },
//     };
//   }
//
//   public async addMembersToChannel(channelId: TDefaultId, memberIds: TDefaultId[]): Promise<void> {
//     return Promise.resolve(undefined);
//   }
//
//   public async createChannel(): Promise<TChannelBaseInfo> {
//     return { ...messages[0], owner: channelContacts[0].first_name, createdAt: messages[0].last_activity };
//   }
//
//   deliverMessages(channelId: TDefaultId): Promise<void> {
//     return Promise.resolve(undefined);
//   }
// }
