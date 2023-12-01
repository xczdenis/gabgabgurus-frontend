import { TObjectKeysSnakeToCamel } from '@/lib/types/case-converters';
import { TWSMessage, TWSMessageType } from '@/lib/types/web-sockets';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { makeMessageFromObject } from '@/lib/utils/make-message-from-object';

type TParsedWSEvent<T = unknown> = {
  type: TWSMessageType;
  content: TObjectKeysSnakeToCamel<T>;
  isError: boolean;
  errorMessage: string;
};

export const parseWSEvent = <T>(event: WebSocketEventMap['message']): TParsedWSEvent<T> => {
  const parsedEvent: TWSMessage<T> = JSON.parse(event.data);
  const isError = parsedEvent.type === 'error';

  let errorMessage = '';
  if (isError) {
    errorMessage = makeMessageFromObject(parsedEvent.content);
  }

  return {
    type: parsedEvent.type,
    content: convertKeysSnakeToCamel<T>(parsedEvent.content),
    isError,
    errorMessage,
  };
};
