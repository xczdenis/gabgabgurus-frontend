import { IUser } from '@/lib/types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAuthState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: IUser | null;
  emailCodeIsSent: boolean;
}

export const initialState: IAuthState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  emailCodeIsSent: false,
};

const reducers = {
  initialize: (state: IAuthState, action: PayloadAction<{ isAuthenticated: boolean; user: IUser | null }>) => {
    const { isAuthenticated, user } = action.payload;
    state.isAuthenticated = isAuthenticated;
    state.isInitialized = true;
    state.user = user;
  },
  setIsInitialize: (state: IAuthState, action: PayloadAction<boolean>) => {
    state.isInitialized = action.payload;
  },
  signIn: (state: IAuthState, action: PayloadAction<IUser>) => {
    state.isAuthenticated = true;
    state.user = action.payload;
  },
  signOut: (state: IAuthState) => {
    state.isAuthenticated = false;
    state.user = null;
  },
  setEmailCodeIsSent: (state: IAuthState, action: PayloadAction<boolean>) => {
    state.emailCodeIsSent = action.payload;
  },
  updateUser: (state: IAuthState, action: PayloadAction<IUser>) => {
    state.user = action.payload;
  },
};
export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers,
});

export const { reducer } = slice;
