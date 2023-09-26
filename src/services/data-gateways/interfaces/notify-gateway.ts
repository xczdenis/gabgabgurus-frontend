import { TNotification } from '@/lib/types/notification';
import { TDefaultId } from '@/lib/types/common';

export abstract class AbstractNotifyGateway {
  public abstract getNotifications(): Promise<TNotification[]>;
  public abstract markAllAsRead(): Promise<TNotification[]>;
  public abstract markOneAsRead(id: TDefaultId): Promise<TNotification>;
  public abstract removeOne(id: TDefaultId): Promise<void>;
}
