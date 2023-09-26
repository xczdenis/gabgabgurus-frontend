import { AbstractChatGateway } from '@/services/data-gateways/interfaces';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { paginationConfig } from '@/config';
import { TPaginationParams } from '@/lib/types/pagination';
import { TChat, TChatMessage, TChatMessagePagination, TChatPagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { threads } from '@/mocks/data/threads';
import { chats } from '@/mocks/data/chats';
import { TSendMessageParams } from '@/services/data-gateways/interfaces/chat-gateway';

class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

export class MockChatGateway extends AbstractChatGateway {
  public async getChats(params?: TPaginationParams): Promise<TChatPagination> {
    let page = 1;
    let count = paginationConfig.usersOnSearchPageCount;
    if (params) {
      page = params.page ? parseInt(String(params.page)) : page;
      count = params.count ? parseInt(String(params.count)) : count;
    }

    const totalPages = Math.ceil(chats.length / count);
    const start = (page - 1) * count;
    const end = start + count;

    const next = page < totalPages ? page + 1 : null;
    const prev = page > 1 ? page - 1 : null;
    const current = page;

    const response = {
      count: totalPages,
      next,
      prev,
      current,
      results: chats.slice(start, end),
    };

    return convertKeysSnakeToCamel(response);
  }

  public async getChatByMemberId(memberId: number): Promise<TChat> {
    const chat = chats[memberId];
    if (!chat) {
      throw new HttpError('Chat not found', 404);
    }
    return convertKeysSnakeToCamel(chat);
  }

  public async getChatMessages(chatId: TDefaultId, options?: TPaginationParams): Promise<TChatMessagePagination> {
    let page = 1;
    let count = paginationConfig.messagesCount;
    if (options) {
      page = options.page ? parseInt(String(options.page)) : page;
      count = options.count ? parseInt(String(options.count)) : count;
    }

    const allData = [...threads[0].messages].reverse();
    const totalPages = Math.ceil(allData.length / count);
    const start = (page - 1) * count;
    const end = start + count;

    const next = page < totalPages ? page + 1 : null;
    const prev = page > 1 ? page - 1 : null;
    const current = page;

    const response = {
      count: totalPages,
      next,
      prev,
      current,
      results: allData.slice(start, end),
    };

    console.log(allData);
    console.log('page =', page);
    console.log('start =', start);
    console.log('end =', end);
    console.log(response.results);

    return convertKeysSnakeToCamel(response);
  }

  public async sendMessage(params: TSendMessageParams): Promise<TChatMessage> {
    const now = new Date();

    return {
      id: 34,
      attachments: [],
      body: params.body,
      contentType: 'text',
      createdAt: now.getTime(),
      authorId: params.authorId,
    };
  }
}
