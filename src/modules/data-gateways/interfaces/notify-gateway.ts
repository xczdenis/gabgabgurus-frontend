import { MessageStatuses, QueryParamLookups } from '@/config';
import { TDefaultId } from '@/lib/types/common';
import { TNotification, TNotificationPagination } from '@/lib/types/notification';
import { TLimitOffsetPaginationParams } from '@/lib/types/pagination';
import { AbstractBaseGateway } from './base-gateway';

export type TGetNotificationsParams = {
  status?: MessageStatuses;
  statusLookup?: QueryParamLookups;
} & TLimitOffsetPaginationParams;

export abstract class AbstractNotifyGateway extends AbstractBaseGateway {
  public abstract getNotifications(params: TGetNotificationsParams): Promise<TNotificationPagination>;
  public abstract markOneAsRead(id: TDefaultId): Promise<TNotification>;
  public abstract markAllBySenderAsRead(senderId: TDefaultId): Promise<void>;
  public abstract markAllAsRead(): Promise<void>;
}
