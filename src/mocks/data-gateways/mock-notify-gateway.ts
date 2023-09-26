import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { TNotification } from '@/lib/types/notification';
import { notifications } from '@/mocks/data/notifications';
import { AbstractNotifyGateway } from '@/services/data-gateways/interfaces/notify-gateway';
import { TDefaultId } from '@/lib/types/common';

export class MockNotifyGateway extends AbstractNotifyGateway {
  public async getNotifications(): Promise<TNotification[]> {
    return convertKeysSnakeToCamel(notifications);
  }

  public async markAllAsRead(): Promise<TNotification[]> {
    const updatedNotifications = notifications.map((notification) => ({ ...notification, read: true }));
    return convertKeysSnakeToCamel(updatedNotifications);
  }

  public async markOneAsRead(id: TDefaultId): Promise<TNotification> {
    const index = notifications.findIndex((notification) => notification.id === id);
    if (index !== -1) {
      return convertKeysSnakeToCamel({ ...notifications[index], read: true });
    }
    throw new Error();
  }

  public async removeOne(id: TDefaultId): Promise<void> {
    const index = notifications.findIndex((notification) => notification.id === id);
    if (index !== -1) {
      notifications.splice(index, 1);
    } else {
      throw new Error();
    }
  }
}
