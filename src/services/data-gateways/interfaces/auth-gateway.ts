import { IUser } from '@/lib/types/user';
import { TSignupCredentials } from '@/lib/types/auth';

export abstract class AbstractAuthGateway {
  public abstract me(): Promise<IUser>;

  public abstract signUp(data: TSignupCredentials): Promise<IUser>;

  public abstract signIn(email: string, password: string): Promise<IUser>;

  public abstract signInWithEmailCode(code: string): Promise<IUser | null>;

  public abstract signOut(): Promise<boolean>;

  public abstract sendEmailCode(): Promise<boolean>;
}
