'use client';

import { IUser } from '@/lib/types/user';
import { initialState } from '@/store/slices/auth';
import { createContext } from 'react';
import { IContextProps } from './types';

export const AuthContext = createContext<IContextProps>({
  ...initialState,
  signIn: async () => ({}) as IUser,
  signInWithEmailCode: async () => ({}) as IUser,
  signOut: async () => {},
});
