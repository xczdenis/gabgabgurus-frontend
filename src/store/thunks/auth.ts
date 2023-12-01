import { IUser } from '@/lib/types/user';
import { TSignInParams } from '@/modules/data-gateways/interfaces/oauth-gateway';
import { authService, localStorageService, oAuthService } from '@/modules/services';
import { slice as authSlice } from '@/store/slices/auth';
import { urls } from '@/urls';
import { Dispatch } from 'redux';

const initializeThunk = (user: IUser) => async (dispatch: Dispatch) => {
  dispatch(authSlice.actions.initialize({ isAuthenticated: true, user }));
  localStorageService.setUser(user);
};

const resetAuthState = () => async (dispatch: Dispatch) => {
  dispatch(authSlice.actions.initialize({ isAuthenticated: false, user: null }));
  localStorageService.removeUser();
};

const signInThunk = (email: string, password: string) => async (dispatch: Dispatch) => {
  return authService
    .signIn(email, password)
    .then((user) => {
      dispatch(authSlice.actions.signIn(user));
      localStorageService.setUser(user);
      return user;
    })
    .catch((error) => {
      dispatch(authSlice.actions.initialize({ isAuthenticated: false, user: null }));
      localStorageService.removeUser();
      throw error;
    });
};

const signInWithEmailCodeThunk = (code: string) => async (dispatch: Dispatch) => {
  return authService
    .signInWithEmailCode(code)
    .then((user) => {
      if (user) {
        dispatch(authSlice.actions.signIn(user));
        localStorageService.setUser(user);
        return user;
      }
      return null;
    })
    .catch((error) => {
      dispatch(authSlice.actions.initialize({ isAuthenticated: false, user: null }));
      localStorageService.removeUser();
      throw error;
    });
};

const oAuthSignInThunk = (params: TSignInParams) => async (dispatch: Dispatch) => {
  return oAuthService
    .signIn(params)
    .then((user) => {
      dispatch(authSlice.actions.signIn(user));
      localStorageService.setUser(user);
      return user;
    })
    .catch((error) => {
      dispatch(authSlice.actions.initialize({ isAuthenticated: false, user: null }));
      localStorageService.removeUser();
      throw error;
    });
};

const signOutThunk = () => async (dispatch: Dispatch) => {
  return oAuthService
    .signOut()
    .then(() => {
      dispatch(authSlice.actions.signOut());
      localStorageService.removeUser();
      window.location.href = urls.index;
    })
    .catch((error) => {
      throw error;
    });
};

const updateUser = (user: IUser) => async (dispatch: Dispatch) => {
  dispatch(authSlice.actions.updateUser(user));
  localStorageService.setUser(user);
};

const setIsInitialize = (isInitialize: boolean) => async (dispatch: Dispatch) => {
  dispatch(authSlice.actions.setIsInitialize(isInitialize));
};

export const thunks = {
  initializeThunk,
  signInThunk,
  signInWithEmailCodeThunk,
  oAuthSignInThunk,
  signOutThunk,
  updateUser,
  setIsInitialize,
  resetAuthState,
};
