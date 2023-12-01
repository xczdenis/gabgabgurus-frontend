import { IUser } from '@/lib/types/user';
import { IAuthState } from '@/store/slices/auth';

export type TOwnProps = {
  children: React.ReactNode;
};

export type TProps = TOwnProps;

export interface IContextProps extends IAuthState {
  signIn: (email: string, password: string) => Promise<IUser>;
  signInWithEmailCode: (code: string) => Promise<IUser | null>;
  signOut: () => Promise<void>;
}
