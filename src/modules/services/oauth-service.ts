import { TOAuthProvider } from '@/lib/types/oauth';
import { IUser } from '@/lib/types/user';
import { AbstractOAuthGateway, TSignInParams } from '@/modules/data-gateways/interfaces/oauth-gateway';

export class OAuthService {
  private _authGateway: AbstractOAuthGateway;

  constructor(authGateway: AbstractOAuthGateway) {
    this._authGateway = authGateway;
  }

  public getAuthorizeURL = (provider: TOAuthProvider): Promise<string> => {
    return this._authGateway.getAuthorizeURL(provider);
  };

  public signIn = (params: TSignInParams): Promise<IUser> => {
    return this._authGateway.signIn(params);
  };

  public signOut = (): Promise<void> => {
    return this._authGateway.signOut();
  };
}
