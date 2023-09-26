'use client';

import { useCallback, useRef, useState } from 'react';
import { Badge, IconButton } from '@mui/material';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { indigo } from '@/theme/colors';
import { NotificationsPopover } from '@/components/NotificationsButton/NotificationsPopover';
import { useNotifications } from '@/lib/hooks/use-notifications';

const NotificationsButton: React.FC = () => {
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  const [openPopover, setOpenPopover] = useState<boolean>(false);
  const { notifications } = useNotifications();

  const handlePopoverOpen = useCallback(() => {
    setOpenPopover(true);
  }, []);

  const handlePopoverClose = useCallback(() => {
    setOpenPopover(false);
  }, []);

  const unread = () => {
    return notifications?.reduce((acc, notification) => acc + (notification.read ? 0 : 1), 0);
  };

  return (
    <>
      <IconButton ref={anchorRef} onClick={handlePopoverOpen}>
        <Badge color="error" badgeContent={unread()}>
          <IoMdNotificationsOutline color={indigo.main} />
        </Badge>
      </IconButton>
      <NotificationsPopover
        anchorEl={anchorRef.current}
        onClose={handlePopoverClose}
        open={openPopover}
        notifications={notifications}
      />
    </>
  );
};

export default NotificationsButton;
