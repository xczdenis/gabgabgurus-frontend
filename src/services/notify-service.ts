import { AbstractNotifyGateway } from '@/services/data-gateways/interfaces';
import { TNotification } from '@/lib/types/notification';
import { TDefaultId } from '@/lib/types/common';

export class NotifyService {
  private _notifyGateway: AbstractNotifyGateway;

  constructor(notifyGateway: AbstractNotifyGateway) {
    this._notifyGateway = notifyGateway;
  }

  public async getNotifications(): Promise<TNotification[]> {
    return this._notifyGateway.getNotifications();
  }

  public async markAllAsRead(): Promise<TNotification[]> {
    return this._notifyGateway.markAllAsRead();
  }

  public async markOneAsRead(id: TDefaultId): Promise<TNotification> {
    return this._notifyGateway.markOneAsRead(id);
  }

  public async removeOne(id: TDefaultId): Promise<void> {
    return this._notifyGateway.removeOne(id);
  }
}
