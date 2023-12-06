import { TChannelBaseInfo, TChannelPagination, TMessage, TMessagePagination } from '@/lib/types/chat';
import {
  TChannelBaseInfoResponse,
  TChannelPaginationResponse,
  TMessagePaginationResponse,
  TMessageResponse,
} from '@/lib/types/chat-response';
import { TDefaultId } from '@/lib/types/common';
import { convertKeysCamelToSnake } from '@/lib/utils/convert-keys-camel-to-snake';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { KyClient } from '@/modules/clients/ky-client';
import { AbstractChannelGateway } from '@/modules/data-gateways/interfaces';
import { TGetChannelsParams, TGetMessagesParams } from '@/modules/data-gateways/interfaces/channel-gateway';

export class KyChatGateway extends AbstractChannelGateway {
  private readonly _apiClient: KyClient;

  constructor(kyClient: KyClient) {
    super('chats');
    this._apiClient = kyClient;
  }

  public async createChannel(): Promise<TChannelBaseInfo> {
    const url = this._buildUrl('channels');
    const response = await this._apiClient.request<TChannelBaseInfoResponse>('post', url);
    return convertKeysSnakeToCamel(response);
  }

  public async addMembersToChannel(channelId: TDefaultId, memberIds: TDefaultId[]): Promise<void> {
    const url = this._buildUrl('user-channels');
    const json = convertKeysCamelToSnake({ channel: channelId, memberIds });
    await this._apiClient.request('post', url, { json });
  }

  public async getChannels(params?: TGetChannelsParams): Promise<TChannelPagination> {
    const url = this._buildUrl('user-channels', params);
    const response = await this._apiClient.request<TChannelPaginationResponse>('get', url);
    return convertKeysSnakeToCamel(response);
  }

  public async getMessages(params: TGetMessagesParams): Promise<TMessagePagination> {
    const channelId = params.channelId;
    delete (params as Partial<TGetMessagesParams>).channelId;
    const url = this._buildUrl(`user-channels/${channelId}/messages`, params);
    const response = await this._apiClient.request<TMessagePaginationResponse>('get', url);
    return convertKeysSnakeToCamel(response);
  }

  public async sendMessage(channelId: TDefaultId, text: string): Promise<TMessage> {
    const url = this._buildUrl('messages');
    const json = convertKeysCamelToSnake({ channelid: channelId, text });
    const response = await this._apiClient.request<TMessageResponse>('post', url, { json });
    return convertKeysSnakeToCamel(response);
  }

  public async deliverMessages(channelId: TDefaultId): Promise<void> {
    const url = this._buildUrl('messages/deliver');
    const json = convertKeysCamelToSnake({ channelId });
    await this._apiClient.request('post', url, { json });
  }

  public async markChannelMessagesAsRead(messageIds: TDefaultId[], recipientId?: TDefaultId): Promise<void> {
    if (messageIds.length > 0 && recipientId) {
      const url = this._buildUrl('messages/mark-as-read');
      const json = convertKeysCamelToSnake({ messageIds, recipientId });
      await this._apiClient.request('patch', url, { json });
    }
  }
}
