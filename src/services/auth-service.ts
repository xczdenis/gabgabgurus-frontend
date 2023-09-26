import { AbstractAuthGateway } from '@/services/data-gateways/interfaces';
import { IUser } from '@/lib/types/user';
import { TSignupCredentials } from '@/lib/types/auth';

export class AuthService {
  private _authGateway: AbstractAuthGateway;

  constructor(authGateway: AbstractAuthGateway) {
    this._authGateway = authGateway;
  }

  public async me(): Promise<IUser> {
    return this._authGateway.me();
  }

  public async signUp(credentials: TSignupCredentials): Promise<IUser> {
    return this._authGateway.signUp(credentials);
  }

  public async signIn(email: string, password: string): Promise<IUser> {
    return this._authGateway.signIn(email, password);
  }
  public async signInWithEmailCode(code: string): Promise<IUser | null> {
    return this._authGateway.signInWithEmailCode(code);
  }

  public async signOut(): Promise<boolean> {
    return this._authGateway.signOut();
  }

  public async sendEmailCode(): Promise<boolean> {
    return this._authGateway.sendEmailCode();
  }
}
