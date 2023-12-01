import { TDefaultId } from '@/lib/types/common';
import { TWSClientOptions, WSClient } from '@/modules/clients/ws-client';
import { AbstractBaseWSService } from '@/modules/services/base';

const enum MessageTypes {
  ChannelMessage = 'message',
  MarkAsRead = 'mark_as_read',
  UserBlocking = 'user_blocking',
}

export type TChannelMessageObject = {
  channelId: TDefaultId;
  text: string;
};

export type TUserBlockingObject = {
  id: TDefaultId;
  isBlocked: boolean;
};

export class ChannelWsService extends AbstractBaseWSService {
  constructor(socketClient: WSClient, serviceName = 'Channel service') {
    super(socketClient, serviceName, 'chats');
  }

  public connect = (chatId: TDefaultId, options?: TWSClientOptions): void => {
    const urlPath = this.buildUrl(chatId);
    this.connectToWs(urlPath, options);
  };

  public sendChannelMessage = (payload: TChannelMessageObject): void => {
    this.sendWsMessage(MessageTypes.ChannelMessage, payload);
  };

  public markChannelMessagesAsRead = (messageIds: TDefaultId[], recipientId?: TDefaultId): void => {
    if (messageIds.length > 0 && recipientId) {
      this.sendWsMessage(MessageTypes.MarkAsRead, { messageIds, recipientId });
    }
  };

  public setUserBlockingStatus = (payload: TUserBlockingObject): void => {
    this.sendWsMessage(MessageTypes.UserBlocking, payload);
  };
}
