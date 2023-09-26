import { Dispatch } from 'redux';
import { authService, localStorageService } from '@/services';
import { slice as authSlice } from '@/store/slices/auth';
import { IUser } from '@/lib/types/user';

const initializeThunk = () => async (dispatch: Dispatch) => {
  return authService
    .me()
    .then((user) => {
      dispatch(authSlice.actions.initialize({ isAuthenticated: true, user }));
      localStorageService.setUser(user);
      return user;
    })
    .catch((error) => {
      dispatch(authSlice.actions.initialize({ isAuthenticated: false, user: null }));
      localStorageService.removeUser();
      throw error;
    });
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

const signOutThunk = () => async (dispatch: Dispatch) => {
  return authService
    .signOut()
    .then((result) => {
      if (result === true) {
        dispatch(authSlice.actions.signOut());
        localStorageService.removeUser();
        return result;
      }
      throw new Error('Sign out failed');
    })
    .catch((error) => {
      throw error;
    });
};

const updateUser = (user: IUser) => async (dispatch: Dispatch) => {
  dispatch(authSlice.actions.updateUser(user));
  localStorageService.setUser(user);
};

export const thunks = {
  initializeThunk,
  signInThunk,
  signInWithEmailCodeThunk,
  signOutThunk,
  updateUser,
};
