import { useAppDispatch } from '@/lib/hooks/store';
import { TDefaultId } from '@/lib/types/common';
import { connectedLog, disconnectedLog } from '@/lib/utils/logs';
import { chatWsService } from '@/modules/services';
import { thunks } from '@/store/thunks/chat';
import { useCallback, useEffect, useState } from 'react';

const SERVICE_NAME = chatWsService.serviceName;

export type TUseChannelWsConnection = {
  channelId?: TDefaultId | null;
};

export const useChannelWsConnection = (params: TUseChannelWsConnection) => {
  const { channelId } = params;
  const [socketIsOpen, setSocketIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const socketOnOpen = useCallback(() => {
    setSocketIsOpen(true);
    dispatch(thunks.setSocketIsOpen(true));
    connectedLog(SERVICE_NAME);
  }, [dispatch]);

  const onClose = useCallback(() => {
    setSocketIsOpen(false);
    dispatch(thunks.setSocketIsOpen(false));
    disconnectedLog(SERVICE_NAME);
  }, [dispatch]);

  const connectToWS = useCallback(
    (connectedChannelId?: TDefaultId | null) => {
      if (connectedChannelId && !chatWsService.isOpen() && !chatWsService.isConnecting()) {
        chatWsService.connect(connectedChannelId, {
          onOpen: socketOnOpen,
          onClose: onClose,
        });
      }
    },
    [onClose, socketOnOpen]
  );

  const disconnectFromWs = useCallback(() => {
    if (chatWsService.isOpen()) {
      chatWsService.disconnect();
    }
  }, []);

  useEffect(() => {
    connectToWS(channelId);

    return () => {
      disconnectFromWs();
    };
  }, [channelId, connectToWS, disconnectFromWs]);

  return { socketIsOpen, connectToWS, disconnectFromWs };
};
