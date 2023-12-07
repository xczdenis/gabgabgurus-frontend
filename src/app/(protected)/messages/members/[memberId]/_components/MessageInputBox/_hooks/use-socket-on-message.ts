import { useAppDispatch } from '@/lib/hooks/store';
import { TMessage } from '@/lib/types/chat';
import { TUserBlocking, TUserJoined, TUserReadMessages } from '@/lib/types/chat-ws-events';
import { TDefaultId } from '@/lib/types/common';
import {
  wsMessageIsChannelMessage,
  wsMessageIsUserBlocking,
  wsMessageIsUserJoined,
  wsMessageIsUserReadMessages,
} from '@/lib/types/guards';
import { TWSMessageType } from '@/lib/types/web-sockets';
import { parseWSEvent } from '@/lib/utils/parse-ws-event';
import { showToastError } from '@/lib/utils/show-toast-error';
import { chatWsService } from '@/modules/services';
import { thunks } from '@/store/thunks/chat';
import { useCallback, useEffect, useState } from 'react';

export type TSocketMessageCallbacks = Partial<{
  [K in TWSMessageType]: () => void;
}>;

type TUseSocketOnMessage = {
  socketIsOpen: boolean;
  userId: TDefaultId;
  blockedForMember: boolean;
  socketMessageCallbacks?: TSocketMessageCallbacks;
};

export const useSocketOnMessage = (params: TUseSocketOnMessage) => {
  const { socketIsOpen, blockedForMember, userId, socketMessageCallbacks } = params;
  const dispatch = useAppDispatch();
  const [blockedFor, setBlockedFor] = useState<boolean>(blockedForMember);

  const callSocketMessageCallback = useCallback(
    (messageType: TWSMessageType) => {
      if (socketMessageCallbacks) {
        const callback = socketMessageCallbacks[messageType];
        if (callback) {
          callback();
        }
      }
    },
    [socketMessageCallbacks]
  );

  const handleNewChannelMessage = useCallback(
    async (content: TMessage) => {
      await dispatch(thunks.addMessage(content));
      callSocketMessageCallback('message');
    },
    [callSocketMessageCallback, dispatch]
  );

  const handleUserJoined = useCallback(
    async (content: TUserJoined) => {
      if (content.id !== userId) {
        await dispatch(thunks.setLastActivityOfPeer(Date.now() / 1000));
      }
    },
    [dispatch, userId]
  );

  const handleUserBlocking = useCallback(
    async (content: TUserBlocking) => {
      if (content.id === userId) {
        setBlockedFor(content.isBlocked);
      }
    },
    [userId]
  );

  const handleUserReadMessages = useCallback(
    async (content: TUserReadMessages) => {
      await dispatch(thunks.markMessagesAsRead(content.messageIds));
    },
    [dispatch]
  );

  const handleSocketMessage = async <T>(handler: (content: T) => Promise<void>, content: T) => {
    try {
      await handler(content);
    } catch {
      showToastError();
    }
  };

  const socketOnMessage = useCallback(
    async (event: WebSocketEventMap['message']) => {
      const data = parseWSEvent(event);
      const content = data.content;

      if (wsMessageIsChannelMessage(data, content)) {
        await handleSocketMessage(handleNewChannelMessage, content);
      } else if (wsMessageIsUserJoined(data, content)) {
        await handleSocketMessage(handleUserJoined, content);
      } else if (wsMessageIsUserBlocking(data, content)) {
        await handleSocketMessage(handleUserBlocking, content);
      } else if (wsMessageIsUserReadMessages(data, content)) {
        await handleSocketMessage(handleUserReadMessages, content);
      } else if (data.isError) {
        showToastError();
        console.error(`An error was received from the socket: ${data.errorMessage}`);
      }
    },
    [handleNewChannelMessage, handleUserBlocking, handleUserJoined, handleUserReadMessages]
  );

  useEffect(() => {
    if (socketIsOpen) {
      chatWsService.registerEvents({ onMessage: socketOnMessage });
    }

    return () => {
      if (socketIsOpen) {
        chatWsService.removeListeners({ onMessage: true });
      }
    };
  }, [socketIsOpen, socketOnMessage]);

  return { blockedFor };
};
