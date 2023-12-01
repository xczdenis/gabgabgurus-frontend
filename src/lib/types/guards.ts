import { TMessage } from '@/lib/types/chat';
import { TUserBlocking, TUserJoined, TUserReadMessages } from '@/lib/types/chat-ws-events';
import { TWSMessage, TWSMessageType } from '@/lib/types/web-sockets';

export function checkMessageType(wsMessage: TWSMessage, type: TWSMessageType): boolean {
  return wsMessage && wsMessage.type === type;
}

export function wsMessageIsChannelMessage(wsMessage: TWSMessage, content: unknown): content is TMessage {
  return checkMessageType(wsMessage, 'message');
}

export function wsMessageIsUserJoined(wsMessage: TWSMessage, content: unknown): content is TUserJoined {
  return checkMessageType(wsMessage, 'user_joined');
}

export function wsMessageIsUserBlocking(wsMessage: TWSMessage, content: unknown): content is TUserBlocking {
  return checkMessageType(wsMessage, 'user_blocking');
}

export function wsMessageIsUserReadMessages(wsMessage: TWSMessage, content: unknown): content is TUserReadMessages {
  return checkMessageType(wsMessage, 'user_read_messages');
}
