import { Avatar, Badge, Box, ListItemAvatar, ListItemText, SvgIcon, Typography } from '@mui/material';
import { TNotification } from '@/lib/types/notification';
import { PiUserThin } from 'react-icons/pi';
import { format } from 'date-fns';

type TProps = {
  notification: TNotification;
};

export const PersonalMessage: React.FC<TProps> = (props) => {
  const { notification } = props;
  const createdAt = format(notification.createdAt, 'MMM dd, h:mm a');

  return (
    <>
      <ListItemAvatar sx={{ mt: 0.5 }}>
        <Badge color="primary" variant="dot" overlap="circular" invisible={notification.read}>
          <Avatar src={notification.avatar}>
            <SvgIcon>
              <PiUserThin />
            </SvgIcon>
          </Avatar>
        </Badge>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Box>
            <Typography sx={{ mr: 0.5 }} variant="subtitle2">
              {notification.author}
            </Typography>
            <Typography
              variant={!notification.read ? 'subtitle2' : 'body2'}
              color={!notification.read ? 'text.primary' : 'text.secondary'}
            >
              {notification.text.slice(0, 60)}...
            </Typography>
          </Box>
        }
        secondary={
          <Typography color="text.secondary" variant="caption">
            {createdAt}
          </Typography>
        }
        sx={{ my: 0 }}
      />
    </>
  );
};
