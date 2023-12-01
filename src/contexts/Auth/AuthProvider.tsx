'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { useIam } from '@/lib/hooks/swr/use-iam';
import { useLastActivityUpdater } from '@/lib/hooks/swr/use-last-activity-updater';
import { thunks } from '@/store/thunks/auth';
import { urls } from '@/urls';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { AuthContext } from './context';
import { TProps } from './types';

const AuthProvider = (props: TProps) => {
  const { children } = props;
  const { user, isError } = useIam();
  const dispatch = useAppDispatch();
  const stateAuth = useAppSelector((state) => state.auth);
  const pathname = usePathname();

  useLastActivityUpdater();

  useEffect(() => {
    if (pathname != urls.oauth.redirectUrl && user) {
      dispatch(thunks.initializeThunk(user));
    } else if (isError) {
      dispatch(thunks.resetAuthState());
    }
  }, [dispatch, isError, pathname, user]);

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

  const signOut = useCallback(() => {
    return dispatch(thunks.signOutThunk());
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ ...stateAuth, signIn, signInWithEmailCode, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
