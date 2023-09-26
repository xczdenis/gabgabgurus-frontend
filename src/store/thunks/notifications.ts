import { Dispatch } from 'redux';
import { notifyService } from '@/services';
import { slice } from '@/store/slices/notifications';
import { TDefaultId } from '@/lib/types/common';
import { TNotification } from '@/lib/types/notification';

const setNotifications = (notifications: TNotification[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setNotifications(notifications));
};

const fetchNotifications = () => async (dispatch: Dispatch) => {
  return notifyService
    .getNotifications()
    .then((notifications) => {
      dispatch(slice.actions.setNotifications(notifications));
      return notifications;
    })
    .catch((error) => {
      dispatch(slice.actions.removeNotifications());
      console.error(error);
    });
};

const markAllAsRead = () => async (dispatch: Dispatch) => {
  return notifyService
    .markAllAsRead()
    .then((notifications) => {
      dispatch(slice.actions.setNotifications(notifications));
      return notifications;
    })
    .catch((error) => {
      dispatch(slice.actions.removeNotifications());
      console.error(error);
    });
};

const markOneAsRead = (id: TDefaultId) => async (dispatch: Dispatch) => {
  return notifyService
    .markOneAsRead(id)
    .then((notification) => {
      dispatch(slice.actions.markOneAsRead(id));
      return notification;
    })
    .catch((error) => {
      console.error(error);
    });
};

const removeOne = (id: TDefaultId) => async (dispatch: Dispatch) => {
  return notifyService
    .removeOne(id)
    .then(() => {
      dispatch(slice.actions.removeOne(id));
    })
    .catch((error) => {
      console.error(error);
    });
};

export const thunks = {
  setNotifications,
  fetchNotifications,
  markAllAsRead,
  markOneAsRead,
  removeOne,
};
