import { TChat, TChatMessage, TChatMessagePagination, TChatPagination } from '@/lib/types/chat';
import { TPaginationParams } from '@/lib/types/pagination';
import { TDefaultId } from '@/lib/types/common';

export type TSendMessageParams = {
  chatId: TDefaultId;
  authorId: TDefaultId;
  body: string;
};

export abstract class AbstractChatGateway {
  public abstract getChats(params?: TPaginationParams): Promise<TChatPagination>;
  public abstract getChatByMemberId(memberId: TDefaultId): Promise<TChat>;
  public abstract getChatMessages(chatId: TDefaultId, options?: TPaginationParams): Promise<TChatMessagePagination>;
  public abstract sendMessage(params: TSendMessageParams): Promise<TChatMessage>;
}
