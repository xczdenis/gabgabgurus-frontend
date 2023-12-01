import { ChannelTypes } from '@/config';
import { TChannelBaseInfo, TChannelPagination, TMessage, TMessagePagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { TLimitOffsetPaginationParams, TPageNumberPaginationParams } from '@/lib/types/pagination';
import { AbstractBaseGateway } from './base-gateway';

export type TSendMessageParams = {
  chatId: TDefaultId;
  authorId: TDefaultId;
  body: string;
};

export type TGetChannelsParams = {
  participants?: TDefaultId[];
  channelType?: ChannelTypes;
} & TPageNumberPaginationParams;

export type TGetMessagesParams = {
  channelId: TDefaultId;
} & TLimitOffsetPaginationParams;

export abstract class AbstractChannelGateway extends AbstractBaseGateway {
  public abstract createChannel(): Promise<TChannelBaseInfo>;
  public abstract addMembersToChannel(channelId: TDefaultId, memberIds: TDefaultId[]): Promise<void>;
  public abstract getChannels(params?: TGetChannelsParams): Promise<TChannelPagination>;
  public abstract getMessages(params: TGetMessagesParams): Promise<TMessagePagination>;
  public abstract sendMessage(channelId: TDefaultId, text: string): Promise<TMessage>;
  public abstract deliverMessages(channelId: TDefaultId): Promise<void>;
}
