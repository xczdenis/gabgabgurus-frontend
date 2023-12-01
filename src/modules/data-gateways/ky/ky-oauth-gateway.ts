import { TAuthorizeURLResponse, TOAuthProvider } from '@/lib/types/oauth';
import { IUser } from '@/lib/types/user';
import { TBaseUserResponse, TSignInResponse } from '@/lib/types/user-response';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { KyClient } from '@/modules/clients/ky-client';
import { AbstractOAuthGateway, TSignInParams } from '@/modules/data-gateways/interfaces/oauth-gateway';

export class KyOAuthGateway extends AbstractOAuthGateway {
  private readonly _apiClient: KyClient;

  constructor(kyClient: KyClient) {
    super('oauth');
    this._apiClient = kyClient;
  }

  public async getAuthorizeURL(provider: TOAuthProvider): Promise<string> {
    const url = `${this._urlNamespace}/${provider}/`;
    const response = await this._apiClient.request<TAuthorizeURLResponse>('get', url);
    return response.authorize_url;
  }

  public async signIn(params: TSignInParams): Promise<IUser> {
    const url = this._buildUrl('signin');
    const response = await this._apiClient.request<TSignInResponse>('post', url, { json: params });
    return convertKeysSnakeToCamel(response.user);
  }

  public async signOut(): Promise<void> {
    const url = this._buildUrl('signout');
    await this._apiClient.request<TBaseUserResponse>('post', url);
  }
}
