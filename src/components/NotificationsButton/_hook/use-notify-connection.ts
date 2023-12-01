import { connectedLog, disconnectedLog } from '@/lib/utils/logs';
import { notifyWsService } from '@/modules/services';
import { useEffect, useState } from 'react';

const SERVICE_NAME = notifyWsService.serviceName;

export const useNotifyConnection = (userId: number) => {
  const [socketIsOpen, setSocketIsOpen] = useState(false);

  const onOpen = () => {
    setSocketIsOpen(true);
    connectedLog(SERVICE_NAME);
  };

  const onClose = () => {
    setSocketIsOpen(false);
    disconnectedLog(SERVICE_NAME);
  };

  useEffect(() => {
    const connect = () => {
      if (!notifyWsService.isOpen() && !notifyWsService.isConnecting()) {
        notifyWsService.connect(userId, { onOpen, onClose });
      }
    };

    const disconnect = () => {
      if (notifyWsService.isOpen()) {
        notifyWsService.disconnect();
      }
    };

    connect();

    return () => {
      disconnect();
    };
  }, [userId]);

  return { socketIsOpen };
};
