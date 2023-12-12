import { MessageStatuses, paginationConfig } from '@/config';
import { TChannelBaseInfo, TChannelPagination, TMessage, TMessagePagination } from '@/lib/types/chat';
import { TChannelBaseInfoResponse, TChannelPaginationResponse } from '@/lib/types/chat-response';
import { TDefaultId } from '@/lib/types/common';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { createResourceId } from '@/lib/utils/create-resource-id';
import { channels } from '@/mocks/data/channels';
import { messagesByChannelId } from '@/mocks/data/messages';
import { mockAdmin } from '@/mocks/data/users';
import { AbstractChannelGateway } from '@/modules/data-gateways/interfaces';
import { TGetChannelsParams, TGetMessagesParams } from '@/modules/data-gateways/interfaces/channel-gateway';

export class MockChannelGateway extends AbstractChannelGateway {
  constructor() {
    super();
  }

  public async createChannel(): Promise<TChannelBaseInfo> {
    const createdChannel: TChannelBaseInfoResponse = {
      id: createResourceId(),
      owner: mockAdmin.firstName,
      createdAt: new Date().getTime() / 1000,
    };
    return convertKeysSnakeToCamel(createdChannel);
  }

  public async addMembersToChannel(channelId: TDefaultId, memberIds: TDefaultId[]): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async getChannels(params?: TGetChannelsParams): Promise<TChannelPagination> {
    let page = 1;
    let count = paginationConfig.defaultPageSize;
    if (params) {
      page = params.page ? parseInt(String(params.page)) : page;
      count = params.count ? parseInt(String(params.count)) : count;
    }

    const allData = channels.filter((channel) => {
      const searchParamsParticipantId = params?.participants ? params.participants[0] : 0;
      const participant = channel.participants.find((participant) => participant.id === searchParamsParticipantId);
      return params?.participants ? participant !== undefined : true;
    });
    const pages = Math.ceil(allData.length / count);
    const start = (page - 1) * count;
    const end = start + count;

    const next = page < pages ? String(page + 1) : null;
    const prev = page > 1 ? String(page - 1) : null;
    const current = page;

    const response: TChannelPaginationResponse = {
      count: allData.length,
      next,
      previous: prev,
      current,
      pages,
      results: allData.slice(start, end),
    };

    return convertKeysSnakeToCamel(response);
  }

  public async getMessages(params: TGetMessagesParams): Promise<TMessagePagination> {
    let page = 1;
    let count = paginationConfig.messagesPageSize;
    if (params) {
      page = params.offset ? parseInt(String(params.offset)) : page;
      count = params.limit ? parseInt(String(params.limit)) : count;
    }

    const allData = messagesByChannelId[params.channelId] ?? [];
    const pages = Math.ceil(allData.length / count);
    const start = (page - 1) * count;
    const end = start + count;

    const next = page < pages ? String(page + 1) : null;
    const prev = page > 1 ? String(page - 1) : null;

    const response = {
      count: allData.length,
      next: next,
      previous: prev,
      results: allData.slice(start, end),
    };

    return convertKeysSnakeToCamel(response);
  }

  public async sendMessage(channelId: TDefaultId, text: string): Promise<TMessage> {
    const now = new Date();

    return {
      id: createResourceId(),
      text: text,
      createdAt: now.getTime(),
      status: MessageStatuses.Delivered,
      sender: mockAdmin,
    };
  }

  deliverMessages(channelId: TDefaultId): Promise<void> {
    return Promise.resolve(undefined);
  }

  public async markChannelMessagesAsRead(messageIds: TDefaultId[], recipientId?: TDefaultId): Promise<void> {
    return Promise.resolve(undefined);
  }
}
