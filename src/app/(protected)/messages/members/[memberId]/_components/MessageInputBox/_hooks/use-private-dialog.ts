import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { TDefaultId } from '@/lib/types/common';
import { showToastError } from '@/lib/utils/show-toast-error';
import { thunks } from '@/store/thunks/chat';
import { useCallback, useEffect, useState } from 'react';
import { sendChannelMessage } from '../_utils/send-channel-message';
import { useChannelWsConnection } from './use-channel-ws-connection';
import { TSocketMessageCallbacks, useSocketOnMessage } from './use-socket-on-message';

type TUsePrivetDialogParams = {
  userId: TDefaultId;
  memberId: TDefaultId;
  blockedForMember: boolean;
  socketMessageCallbacks?: TSocketMessageCallbacks;
};

export const usePrivateDialog = (params: TUsePrivetDialogParams) => {
  const { userId, memberId, blockedForMember, socketMessageCallbacks } = params;
  const channelId = useAppSelector((state) => state.chat.channelId);
  const { socketIsOpen } = useChannelWsConnection({ channelId });
  const { blockedFor } = useSocketOnMessage({ socketIsOpen, userId, blockedForMember, socketMessageCallbacks });
  const [pendingMessagesQueue, setPendingMessagesQueue] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (socketIsOpen && pendingMessagesQueue.length > 0) {
      pendingMessagesQueue.map((text) => {
        sendChannelMessage(channelId, text);
      });
    }
  }, [channelId, pendingMessagesQueue, socketIsOpen]);

  const initPrivateDialog = useCallback(() => {
    try {
      return dispatch(thunks.initPrivateDialog(memberId));
    } catch {
      showToastError();
      return null;
    }
  }, [dispatch, memberId]);

  const getChannelIdOrInitPrivateDialog = useCallback(() => {
    return channelId ? channelId : initPrivateDialog();
  }, [channelId, initPrivateDialog]);

  const SendMessage = useCallback(
    async (text: string) => {
      if (!blockedFor) {
        const targetChannelId = await getChannelIdOrInitPrivateDialog();
        if (targetChannelId && text) {
          if (socketIsOpen) {
            sendChannelMessage(targetChannelId, text);
          } else {
            setPendingMessagesQueue((prev) => [...prev, text]);
          }
        }
      } else {
        showToastError("You can't send messages to this chat", '🙁');
      }
    },
    [blockedFor, getChannelIdOrInitPrivateDialog, socketIsOpen]
  );

  return { SendMessage };
};
