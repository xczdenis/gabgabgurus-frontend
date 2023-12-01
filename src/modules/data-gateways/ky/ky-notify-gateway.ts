import { MessageStatuses, QueryParamLookups } from '@/config';
import { TDefaultId } from '@/lib/types/common';
import { TNotification, TNotificationPagination } from '@/lib/types/notification';
import { TNotificationPaginationResponse, TNotificationResponse } from '@/lib/types/notification_response';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { KyClient } from '@/modules/clients/ky-client';
import { AbstractNotifyGateway } from '@/modules/data-gateways/interfaces';
import { TGetNotificationsParams } from '@/modules/data-gateways/interfaces/notify-gateway';

export class KyNotifyGateway extends AbstractNotifyGateway {
  private readonly _apiClient: KyClient;

  constructor(kyClient: KyClient) {
    super('notifications');
    this._apiClient = kyClient;
  }

  public async getNotifications(params: TGetNotificationsParams): Promise<TNotificationPagination> {
    const url = this._buildUrl('', params);
    const response = await this._apiClient.request<TNotificationPaginationResponse>('get', url);
    return convertKeysSnakeToCamel(response);
  }

  public async markOneAsRead(id: TDefaultId): Promise<TNotification> {
    const url = this._buildUrl(`${id}`);
    const json = {
      status: MessageStatuses.Read,
    };
    const response = await this._apiClient.request<TNotificationResponse>('patch', url, { json });
    return convertKeysSnakeToCamel(response);
  }

  public async markAllBySenderAsRead(senderId: TDefaultId): Promise<void> {
    const queryParams = {
      senderId,
      status: MessageStatuses.Read,
      status_lookup: QueryParamLookups.LessThan,
    };
    const url = this._buildUrl('', queryParams);
    const json = {
      status: MessageStatuses.Read,
    };
    await this._apiClient.request('patch', url, { json });
  }

  public async markAllAsRead(): Promise<void> {
    const queryParams = {
      status: MessageStatuses.Read,
      status_lookup: QueryParamLookups.LessThan,
    };
    const url = this._buildUrl('', queryParams);
    const json = {
      status: MessageStatuses.Read,
    };
    await this._apiClient.request('patch', url, { json });
  }
}
