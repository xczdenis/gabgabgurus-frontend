'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { useCallback, useEffect } from 'react';
import { AuthContext } from './context';
import { TProps } from './types';
import { thunks } from '@/store/thunks/auth';

const AuthProvider: React.FC<TProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const stateAuth = useAppSelector((state) => state.auth);

  const initialize = useCallback(async () => {
    return dispatch(thunks.initializeThunk());
  }, [dispatch]);

  useEffect(() => {
    initialize().catch((error) => {
      console.error(error.message);
    });
  }, [initialize]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      return dispatch(thunks.signInThunk(email, password));
    },
    [dispatch]
  );

  const signInWithEmailCode = useCallback(
    async (code: string) => {
      return dispatch(thunks.signInWithEmailCodeThunk(code));
    },
    [dispatch]
  );

  const signOut = useCallback(async () => {
    return dispatch(thunks.signOutThunk());
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ ...stateAuth, initialize, signIn, signInWithEmailCode, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
