'use client';

import { makeNotification, makeTabTitleForNewMessage } from '@/components/NotificationsButton/untils';
import { NotificationsPopover } from '@/components/NotificationsPopover';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { useNotifications } from '@/lib/hooks/swr/use-notifications';
import { useBlinkingTabTitle } from '@/lib/hooks/use-blinking-tab-title';
import { wsMessageIsChannelMessage } from '@/lib/types/guards';
import { parseWSEvent } from '@/lib/utils/parse-ws-event';
import { notifyWsService } from '@/modules/services';
import { thunks } from '@/store/thunks/notifications';
import { indigo } from '@/theme/colors';
import { Badge, IconButton } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

export const NotificationsButtonContent = () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const unreadCount = useAppSelector((state) => state.notifications.unreadCount);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { notificationsPagination } = useNotifications();
  const { startBlinking, stopBlinking } = useBlinkingTabTitle();

  useEffect(() => {
    if (notificationsPagination) {
      dispatch(thunks.setNotifications(notificationsPagination));
    }
  }, [dispatch, notificationsPagination]);

  const socketOnMessage = useCallback(
    (event: WebSocketEventMap['message']) => {
      const data = parseWSEvent(event);
      if (wsMessageIsChannelMessage(data, data.content)) {
        const notification = makeNotification(data.content);
        dispatch(thunks.pushNotification(notification)).then(() => {
          startBlinking(makeTabTitleForNewMessage(notification.message.sender.firstName, notification.message.text));
        });
      }
    },
    [dispatch, startBlinking]
  );

  useEffect(() => {
    notifyWsService.registerEvents({ onMessage: socketOnMessage });

    return () => {
      notifyWsService.removeListeners({ onMessage: true });
      stopBlinking();
    };
  }, [socketOnMessage, stopBlinking]);

  const handlePopoverOpen = useCallback(() => {
    setOpenPopover(true);
    stopBlinking();
  }, [stopBlinking]);

  const handlePopoverClose = useCallback(() => {
    setOpenPopover(false);
  }, []);

  return (
    <>
      <IconButton ref={anchorRef} onClick={handlePopoverOpen}>
        <Badge color="error" badgeContent={unreadCount}>
          <IoMdNotificationsOutline color={indigo.main} />
        </Badge>
      </IconButton>
      <NotificationsPopover anchorEl={anchorRef.current} onClose={handlePopoverClose} open={openPopover} />
    </>
  );
};
