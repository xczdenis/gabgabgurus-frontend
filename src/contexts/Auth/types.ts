import { IAuthState } from '@/store/slices/auth';
import { IUser } from '@/lib/types/user';

export type TOwnProps = {
  children: React.ReactNode;
};

export type TProps = TOwnProps;

export interface IContextProps extends IAuthState {
  initialize: () => Promise<IUser>;
  signIn: (email: string, password: string) => Promise<IUser>;
  signInWithEmailCode: (code: string) => Promise<IUser | null>;
  signOut: () => Promise<boolean>;
}
