import { TDefaultId } from '@/lib/types/common';
import { IUser, TMemberPagination, TMemberProfile, TUserLanguage, TUserProfile } from '@/lib/types/user';
import { TBaseUserResponse, TMemberPaginationResponse } from '@/lib/types/user-response';
import { convertKeysCamelToSnake } from '@/lib/utils/convert-keys-camel-to-snake';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { KyClient } from '@/modules/clients/ky-client';
import { AbstractUserGateway } from '@/modules/data-gateways/interfaces';
import {
  TSearchRequest,
  TSendFeedbackRequest,
  TUpdateUserProfileRequest,
  TUserLanguageRequest,
} from '@/modules/data-gateways/interfaces/user-gateway';
import { Options } from 'ky';
import { HttpMethod } from 'ky/distribution/types/options';

type TMakeRequestOptions = {
  data?: unknown;
  body?: BodyInit;
  options?: Options;
};

export class KyUserGateway extends AbstractUserGateway {
  private readonly _apiClient: KyClient;

  constructor(kyClient: KyClient) {
    super('users');
    this._apiClient = kyClient;
  }

  public async iam(): Promise<IUser> {
    const url = this._buildUrl('iam');
    const data = await this._apiClient.request<TBaseUserResponse>('get', url);
    return convertKeysSnakeToCamel(data);
  }

  public async searchMembers(params?: TSearchRequest): Promise<TMemberPagination> {
    const url = this._buildUrl('', params);
    const response = await this._apiClient.request<TMemberPaginationResponse>('get', url);
    return convertKeysSnakeToCamel(response);
  }

  public async getTopMembers(): Promise<TMemberProfile[]> {
    const params: TSearchRequest = { top: 3 };
    const url = this._buildUrl('', params);
    const response = await this._apiClient.request<TMemberPaginationResponse>('get', url);
    return convertKeysSnakeToCamel(response.results);
  }

  public async getUserProfile(): Promise<TUserProfile> {
    return this._makeRequest<TUserProfile>('get', 'me');
  }

  public async updateUserProfile(data: TUpdateUserProfileRequest): Promise<TUserProfile> {
    return this._makeRequest<TUserProfile>('patch', 'me', { data });
  }

  public async updateUserLanguage(data: TUserLanguageRequest): Promise<TUserLanguage> {
    return this._makeRequest<TUserLanguage>('post', 'me/languages', { data });
  }

  public async updateAvatar(body: FormData): Promise<void> {
    return this._makeRequest<void>('patch', 'me/avatar', { body });
  }

  public async deleteAvatar(): Promise<void> {
    return this._makeRequest<void>('delete', 'me/avatar');
  }

  public async getMemberProfile(id: TDefaultId): Promise<TMemberProfile> {
    return this._makeRequest<TMemberProfile>('get', id.toString());
  }

  public async blockMember(id: TDefaultId): Promise<void> {
    return this._makeRequest<void>('post', 'me/blocked-users', { data: { user: id } });
  }

  public async unblockMember(id: TDefaultId): Promise<void> {
    return this._makeRequest<void>('delete', 'me/blocked-users', { data: { user: id } });
  }

  public async updateLastActivity(): Promise<void> {
    return this._makeRequest<void>('post', 'last-activity');
  }

  public async sendFeedback(data: TSendFeedbackRequest): Promise<void> {
    return this._makeRequest<void>('post', 'me/feedback', { data });
  }

  private async _makeRequest<T>(method: HttpMethod, urlPath: string, options?: TMakeRequestOptions): Promise<T> {
    const url = this._buildUrl(urlPath);
    let kyOptions: Options = {};
    if (options) {
      if (options.data) {
        kyOptions = { json: convertKeysCamelToSnake(options.data), ...kyOptions };
      }
      if (options.body) {
        kyOptions = { body: options.body, ...kyOptions };
      }
      if (options.options) {
        kyOptions = { ...kyOptions, ...options.options };
      }
    }
    const response = await this._apiClient.request(method, url, kyOptions);
    return convertKeysSnakeToCamel(response) as T;
  }
}
