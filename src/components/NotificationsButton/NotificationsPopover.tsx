'use client';

import {
  Box,
  IconButton,
  List,
  ListItem,
  Popover,
  PopoverProps,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import { Scrollbar } from '@/components/Scrollbar';
import { useEffect, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { NotificationType, TNotification } from '@/lib/types/notification';
import { PersonalMessage } from '@/components/NotificationsButton/PersonalMessage';
import { PiEnvelopeOpenLight } from 'react-icons/pi';
import { thunks } from '@/store/thunks/notifications';
import { useAppDispatch } from '@/lib/hooks/store';
import { TDefaultId } from '@/lib/types/common';

type TOmittedProps = 'open' | 'anchorEl' | 'onClose';

export type TProps = {
  notifications: TNotification[];
  open?: boolean;
  anchorEl: Element | null;
  onClose?: () => void;
} & Omit<PopoverProps, TOmittedProps>;

export const renderContent = (notification: TNotification) => {
  switch (notification.type) {
    case NotificationType.PersonalMessage: {
      return <PersonalMessage notification={notification} />;
    }
    default:
      return null;
  }
};

export const NotificationsPopover: React.FC<TProps> = (props) => {
  const { notifications, anchorEl, onClose, open = false, ...other } = props;
  const [isEmpty, setIsEmpty] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsEmpty(notifications.length === 0);
  }, [notifications.length]);

  const markAllAsRead = () => {
    dispatch(thunks.markAllAsRead());
  };

  const removeOne = (id: TDefaultId) => {
    dispatch(thunks.removeOne(id));
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      disableScrollLock
      onClose={onClose}
      open={open}
      slotProps={{
        paper: { sx: { width: 380 } },
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Typography color="inherit" variant="h6">
          Notifications
        </Typography>
        <Tooltip title="Mark all as read">
          <IconButton onClick={markAllAsRead} size="small" color="inherit">
            <SvgIcon>
              <PiEnvelopeOpenLight />
            </SvgIcon>
          </IconButton>
        </Tooltip>
      </Stack>
      {isEmpty ? (
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2">There are no notifications</Typography>
        </Box>
      ) : (
        <Scrollbar sx={{ maxHeight: 400 }}>
          <List disablePadding>
            {notifications.map((notification) => (
              <ListItem
                divider
                key={notification.id}
                sx={{
                  alignItems: 'flex-start',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                  '& .MuiListItemSecondaryAction-root': {
                    top: '24%',
                  },
                }}
                secondaryAction={
                  <Tooltip title="Remove">
                    <IconButton edge="end" onClick={() => removeOne(notification.id)} size="small">
                      <CgClose />
                    </IconButton>
                  </Tooltip>
                }
              >
                {renderContent(notification)}
              </ListItem>
            ))}
          </List>
        </Scrollbar>
      )}
    </Popover>
  );
};
