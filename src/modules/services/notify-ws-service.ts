import { TDefaultId } from '@/lib/types/common';
import { TWSClientOptions, WSClient } from '@/modules/clients/ws-client';

import { AbstractBaseWSService } from '@/modules/services/base';

export class NotifyWsService extends AbstractBaseWSService {
  constructor(socketClient: WSClient, serviceName = 'Notify service') {
    super(socketClient, serviceName, 'notifications');
  }

  public connect = (userId: TDefaultId, options?: TWSClientOptions): void => {
    const urlPath = this.buildUrl(userId);
    this.connectToWs(urlPath, options);
  };
}
