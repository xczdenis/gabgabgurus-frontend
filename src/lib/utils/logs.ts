import { DEFAULT_LOG_LEVEL } from '@/config';
import { TLogLevel } from '@/lib/types/common';

export const startConnectingLog = (serviceName: string, level?: TLogLevel) => {
  log(`Connecting to ${serviceName}`, level);
};

export const connectedLog = (serviceName: string, level?: TLogLevel) => {
  log(`Connected to ${serviceName}`, level);
};

export const disconnectedLog = (serviceName: string, level?: TLogLevel) => {
  log(`Disconnected from ${serviceName}`, level);
};

export const log = (msg: string, level: TLogLevel = DEFAULT_LOG_LEVEL) => {
  switch (level) {
    case 'info':
      console.info(msg);
      break;
    case 'warning':
      console.warn(msg);
      break;
    case 'error':
      console.error(msg);
      break;
    default:
      console.info(msg);
  }
};
