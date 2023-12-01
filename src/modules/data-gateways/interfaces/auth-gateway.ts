import { IUser } from '@/lib/types/user';
import { AbstractBaseGateway } from './base-gateway';

export type TSignupCredentials = {
  email: string;
  password: string;
};

export abstract class AbstractAuthGateway extends AbstractBaseGateway {
  public abstract signUp(data: TSignupCredentials): Promise<IUser>;
  public abstract signIn(email: string, password: string): Promise<IUser>;
  public abstract signInWithEmailCode(code: string): Promise<IUser | null>;
  public abstract signOut(): Promise<void>;
  public abstract sendEmailCode(): Promise<boolean>;
}
