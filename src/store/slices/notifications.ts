import { TDefaultId } from '@/lib/types/common';
import { TNotification, TNotificationPagination } from '@/lib/types/notification';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface INotificationsState {
  unreadCount: number;
  notifications: TNotification[];
}

const initialState: INotificationsState = {
  unreadCount: 0,
  notifications: [],
};

const reducers = {
  setNotifications(state: INotificationsState, action: PayloadAction<TNotificationPagination>) {
    state.notifications = action.payload.results;
    state.unreadCount = action.payload.count;
  },
  removeNotifications(state: INotificationsState) {
    state.notifications = [];
    state.unreadCount = 0;
  },
  removeOne(state: INotificationsState, action: PayloadAction<TDefaultId>) {
    const index = state.notifications.findIndex((notification) => notification.id === action.payload);

    if (index !== -1) {
      state.notifications.splice(index, 1);
    }
  },
  pushNotification(state: INotificationsState, action: PayloadAction<TNotification>) {
    state.notifications.unshift(action.payload);
    state.unreadCount += 1;
  },
  increaseUnreadCount(state: INotificationsState) {
    state.unreadCount += 1;
  },
  decreaseUnreadCount(state: INotificationsState) {
    state.unreadCount -= 1;
  },
};

export const slice = createSlice({
  name: 'notifications',
  initialState,
  reducers,
});

export const { reducer } = slice;
