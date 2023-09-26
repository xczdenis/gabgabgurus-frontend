import { AbstractChatGateway } from '@/services/data-gateways/interfaces';
import { TChat, TChatMessage, TChatMessagePagination, TChatPagination } from '@/lib/types/chat';
import { TPaginationParams } from '@/lib/types/pagination';
import { TDefaultId } from '@/lib/types/common';
import { TSendMessageParams } from '@/services/data-gateways/interfaces/chat-gateway';

export class ChatService {
  private _chatGateway: AbstractChatGateway;

  constructor(chatGateway: AbstractChatGateway) {
    this._chatGateway = chatGateway;
  }

  public async getChats(params?: TPaginationParams): Promise<TChatPagination> {
    return this._chatGateway.getChats(params);
  }

  public async getChatByMemberId(memberId: TDefaultId): Promise<TChat> {
    return this._chatGateway.getChatByMemberId(memberId);
  }

  public async getChatMessages(chatId: TDefaultId, options?: TPaginationParams): Promise<TChatMessagePagination> {
    return this._chatGateway.getChatMessages(chatId, options);
  }
  public async sendMessage(params: TSendMessageParams): Promise<TChatMessage> {
    return this._chatGateway.sendMessage(params);
  }
}
