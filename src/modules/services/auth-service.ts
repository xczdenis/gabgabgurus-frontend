import { IUser } from '@/lib/types/user';
import { AbstractAuthGateway } from '@/modules/data-gateways/interfaces';
import { TSignupCredentials } from '@/modules/data-gateways/interfaces/auth-gateway';

export class AuthService {
  private _authGateway: AbstractAuthGateway;

  constructor(authGateway: AbstractAuthGateway) {
    this._authGateway = authGateway;
  }

  public signUp = (credentials: TSignupCredentials): Promise<IUser> => {
    return this._authGateway.signUp(credentials);
  };

  public signIn = (email: string, password: string): Promise<IUser> => {
    return this._authGateway.signIn(email, password);
  };

  public signInWithEmailCode = (code: string): Promise<IUser | null> => {
    return this._authGateway.signInWithEmailCode(code);
  };

  public signOut = (): Promise<void> => {
    return this._authGateway.signOut();
  };

  public sendEmailCode = (): Promise<boolean> => {
    return this._authGateway.sendEmailCode();
  };
}
