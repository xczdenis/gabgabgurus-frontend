import { TOAuthProvider } from '@/lib/types/oauth';
import { IUser } from '@/lib/types/user';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { mockAdminResponse } from '@/mocks/data/users';
import { AbstractOAuthGateway } from '@/modules/data-gateways/interfaces/oauth-gateway';

export class MockOAuthGateway extends AbstractOAuthGateway {
  constructor() {
    super();
  }

  public async getAuthorizeURL(provider: TOAuthProvider): Promise<string> {
    return `https://github.com/${provider}`;
  }

  public async signIn(): Promise<IUser> {
    return convertKeysSnakeToCamel(mockAdminResponse);
  }

  public async signOut(): Promise<void> {}
}
