import { KyClient } from '../../clients';
import { AbstractAuthGateway } from '@/services/data-gateways/interfaces';
import { TBaseUserResponse, TSignInResponse } from '@/lib/types/backend';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { KyInstance } from 'ky/distribution/types/ky';
import { IUser } from '@/lib/types/user';
import { TSignupCredentials } from '@/lib/types/auth';

export class KyAuthGateway extends AbstractAuthGateway {
  private readonly _client: KyInstance;
  private readonly _urlNamespace = 'auth';

  constructor(kyClient: KyClient) {
    super();
    this._client = kyClient.getInstance();
  }

  public async me(): Promise<IUser> {
    const url = this._buildUrl('me');
    const response = await this._client.get(url);
    const data = await response.json<TBaseUserResponse>();
    return convertKeysSnakeToCamel(data);
  }

  public async signUp(credentials: TSignupCredentials): Promise<IUser> {
    const url = this._buildUrl('signun');
    const response = await this._client.post(url, { json: credentials });
    const data = await response.json<TBaseUserResponse>();
    return convertKeysSnakeToCamel(data);
  }

  public async signIn(email: string, password: string): Promise<IUser> {
    const url = this._buildUrl('signIn');
    const response = await this._client.post(url, { json: { email, password } });
    const data = await response.json<TSignInResponse>();
    return convertKeysSnakeToCamel(data.user);
  }

  private _buildUrl(path: string): string {
    return `${this._urlNamespace}/${path}/`;
  }
}
