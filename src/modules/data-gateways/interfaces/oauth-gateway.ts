import { TOAuthProvider } from '@/lib/types/oauth';
import { IUser } from '@/lib/types/user';
import { AbstractBaseGateway } from './base-gateway';

export type TSignInParams = {
  code?: string | null;
  state?: string | null;
};

export abstract class AbstractOAuthGateway extends AbstractBaseGateway {
  public abstract getAuthorizeURL(provider: TOAuthProvider): Promise<string>;
  public abstract signIn(params: TSignInParams): Promise<IUser>;
  public abstract signOut(): Promise<void>;
}
