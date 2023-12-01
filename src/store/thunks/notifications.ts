import { TDefaultId } from '@/lib/types/common';
import { TNotification, TNotificationPagination } from '@/lib/types/notification';
import { notifyService } from '@/modules/services';
import { slice } from '@/store/slices/notifications';
import { Dispatch } from 'redux';

const setNotifications = (notifications: TNotificationPagination) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setNotifications(notifications));
};

const removeOne = (id: TDefaultId) => async (dispatch: Dispatch) => {
  return notifyService
    .markOneAsRead(id)
    .then(() => {
      dispatch(slice.actions.removeOne(id));
      dispatch(slice.actions.decreaseUnreadCount());
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const markAllAsRead = () => async (dispatch: Dispatch) => {
  return notifyService
    .markAllAsRead()
    .then((notifications) => {
      dispatch(slice.actions.removeNotifications());
      return notifications;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const pushNotification = (notification: TNotification) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.pushNotification(notification));
};

export const thunks = {
  setNotifications,
  markAllAsRead,
  removeOne,
  pushNotification,
};
