import { TDefaultId } from '@/lib/types/common';
import { TNotification, TNotificationPagination } from '@/lib/types/notification';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { notifications } from '@/mocks/data/notifications';
import { AbstractNotifyGateway, TGetNotificationsParams } from '@/modules/data-gateways/interfaces/notify-gateway';

export class MockNotifyGateway extends AbstractNotifyGateway {
  constructor() {
    super();
  }

  public async getNotifications(params: TGetNotificationsParams): Promise<TNotificationPagination> {
    return convertKeysSnakeToCamel({
      count: notifications.length,
      next: null,
      previous: null,
      current: 1,
      pages: 1,
      results: notifications,
    });
  }

  public async markOneAsRead(id: TDefaultId): Promise<TNotification> {
    const index = notifications.findIndex((notification) => notification.id === id);
    if (index !== -1) {
      return convertKeysSnakeToCamel({ ...notifications[index], read: true });
    }
    throw new Error();
  }

  public async markAllBySenderAsRead(senderId: TDefaultId): Promise<void> {
    notifications.forEach((notification) => {
      if (notification.message.sender.id === senderId) {
        notification.is_read = true;
      }
    });
  }

  public async markAllAsRead(): Promise<void> {
    notifications.forEach((notification) => {
      notification.is_read = true;
    });
  }
}
