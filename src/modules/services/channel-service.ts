import { ChannelTypes, paginationConfig } from '@/config';
import { TChannel, TChannelBaseInfo, TChannelPagination, TMessage, TMessagePagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { AbstractChannelGateway } from '@/modules/data-gateways/interfaces';
import { TGetChannelsParams, TGetMessagesParams } from '@/modules/data-gateways/interfaces/channel-gateway';

export class ChannelService {
  private _chatGateway: AbstractChannelGateway;

  constructor(chatGateway: AbstractChannelGateway) {
    this._chatGateway = chatGateway;
  }

  public initPrivateDialog = async (memberId: TDefaultId): Promise<TDefaultId | null> => {
    let channelId = null;
    const channel = await this.getPrivateChannelByMemberId(memberId);
    if (!channel) {
      const newChannel = await this.createChannel();
      if (newChannel) {
        await this.addMembersToChannel(newChannel.id, [memberId]);
        channelId = newChannel.id;
      }
    } else {
      channelId = channel.id;
    }
    return channelId;
  };

  public createChannel = (): Promise<TChannelBaseInfo> => {
    return this._chatGateway.createChannel();
  };

  public addMembersToChannel = (channelId: TDefaultId, memberIds: TDefaultId[]): Promise<void> => {
    return this._chatGateway.addMembersToChannel(channelId, memberIds);
  };

  public getChannels = (params?: TGetChannelsParams): Promise<TChannelPagination> => {
    const defaultPaginationParams = {
      page: 1,
      count: paginationConfig.chatsPageSize,
    };
    const mergedParams = {
      ...defaultPaginationParams,
      ...params,
    };
    return this._chatGateway.getChannels(mergedParams);
  };

  public getPrivateChannelByMemberId = async (memberId?: TDefaultId | null): Promise<TChannel | null> => {
    if (!memberId) {
      return null;
    }

    const searchParams: TGetChannelsParams = {
      participants: [memberId],
      channelType: ChannelTypes.Private,
    };

    const channelPagination = await this._chatGateway.getChannels(searchParams);
    const channels = channelPagination.results;
    if (channels.length > 0) {
      return channels[0];
    }

    return null;
  };

  public getMessages = (params: TGetMessagesParams): Promise<TMessagePagination> => {
    const defaultPaginationParams = {
      offset: 0,
      limit: paginationConfig.messagesPageSize,
    };
    const mergedParams = {
      ...defaultPaginationParams,
      ...params,
    };
    return this._chatGateway.getMessages(mergedParams);
  };

  public sendMessage = (channelId: TDefaultId, text: string): Promise<TMessage> => {
    return this._chatGateway.sendMessage(channelId, text);
  };

  public markChannelMessagesAsRead = (messageIds: TDefaultId[], recipientId?: TDefaultId): Promise<void> => {
    return this._chatGateway.markChannelMessagesAsRead(messageIds, recipientId);
  };
}
