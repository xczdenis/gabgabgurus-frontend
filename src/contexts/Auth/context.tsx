'use client';

import { initialState } from '@/store/slices/auth';
import { createContext } from 'react';
import { IContextProps } from './types';
import { IUser } from '@/lib/types/user';

export const AuthContext = createContext<IContextProps>({
  ...initialState,
  initialize: async () => ({}) as IUser,
  signIn: async () => ({}) as IUser,
  signInWithEmailCode: async () => ({}) as IUser,
  signOut: async () => ({}) as boolean,
});
