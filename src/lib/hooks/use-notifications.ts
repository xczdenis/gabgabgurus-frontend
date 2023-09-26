import { notifyService } from '@/services';
import useSWR from 'swr';
import { CacheKeys } from '@/config';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/notifications';

const fetcher = () => {
  return notifyService.getNotifications();
};

export const useNotifications = () => {
  const { data: swrNotifications } = useSWR(CacheKeys.Notifications, fetcher);
  const { notifications: stateNotifications, isInitialized } = useAppSelector((state) => state.notifications);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (swrNotifications && !isInitialized) {
      dispatch(thunks.setNotifications(swrNotifications));
    }
  }, [dispatch, isInitialized, swrNotifications]);

  return {
    notifications: stateNotifications,
  };
};
