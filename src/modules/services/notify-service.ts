import { MessageStatuses, paginationConfig, QueryParamLookups } from '@/config';
import { TDefaultId } from '@/lib/types/common';
import { TNotification, TNotificationPagination } from '@/lib/types/notification';
import { TLimitOffsetPaginationParams } from '@/lib/types/pagination';
import { AbstractNotifyGateway } from '@/modules/data-gateways/interfaces';
import { TGetNotificationsParams } from '@/modules/data-gateways/interfaces/notify-gateway';

export class NotifyService {
  private _notifyGateway: AbstractNotifyGateway;

  constructor(notifyGateway: AbstractNotifyGateway) {
    this._notifyGateway = notifyGateway;
  }

  public getNotifications = (params?: TGetNotificationsParams): Promise<TNotificationPagination> => {
    const defaultPaginationParams: TLimitOffsetPaginationParams = {
      limit: paginationConfig.notificationsPageSize,
      offset: 0,
    };
    const onlyUnreadMessagesParams: TGetNotificationsParams = {
      status: MessageStatuses.Read,
      statusLookup: QueryParamLookups.LessThan,
    };
    const mergedParams = {
      ...defaultPaginationParams,
      ...onlyUnreadMessagesParams,
      ...params,
    };
    return this._notifyGateway.getNotifications(mergedParams);
  };

  public markOneAsRead = (id: TDefaultId): Promise<TNotification> => {
    return this._notifyGateway.markOneAsRead(id);
  };

  public markAllBySenderAsRead = (senderId: TDefaultId): Promise<void> => {
    return this._notifyGateway.markAllBySenderAsRead(senderId);
  };

  public markAllAsRead = (): Promise<void> => {
    return this._notifyGateway.markAllAsRead();
  };
}
