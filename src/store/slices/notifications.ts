import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TNotification } from '@/lib/types/notification';
import { TDefaultId } from '@/lib/types/common';

interface INotificationsState {
  isInitialized: boolean;
  notifications: TNotification[];
}

const initialState: INotificationsState = {
  isInitialized: false,
  notifications: [],
};

const reducers = {
  setNotifications(state: INotificationsState, action: PayloadAction<TNotification[]>) {
    state.isInitialized = true;
    state.notifications = action.payload;
  },
  removeNotifications(state: INotificationsState) {
    state.notifications = [];
  },
  markOneAsRead(state: INotificationsState, action: PayloadAction<TDefaultId>) {
    const index = state.notifications.findIndex((notification) => notification.id === action.payload);
    if (index !== -1) {
      state.notifications[index].read = true;
    }
  },
  removeOne(state: INotificationsState, action: PayloadAction<TDefaultId>) {
    const index = state.notifications.findIndex((notification) => notification.id === action.payload);

    if (index !== -1) {
      state.notifications.splice(index, 1);
    }
  },
};

export const slice = createSlice({
  name: 'notifications',
  initialState,
  reducers,
});

export const { reducer } = slice;
