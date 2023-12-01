'use client';

import { USER_ONLINE_WINDOW_MINUTES } from '@/config';
import { Avatar, Badge, ListItemAvatar, SvgIcon } from '@mui/material';
import { PiUserThin } from 'react-icons/pi';

type TProps = {
  avatarSrc: string;
  senderLastActivity: number;
};

export const NPMessageAuthorAvatar = (props: TProps) => {
  const { avatarSrc, senderLastActivity } = props;

  const senderIsOnline = () => {
    if (senderLastActivity) {
      if (Date.now() / 1000 - senderLastActivity <= USER_ONLINE_WINDOW_MINUTES * 60) {
        return true;
      }
    }
    return false;
  };

  return (
    <ListItemAvatar sx={{ mt: 0.5 }}>
      <Badge
        color="success"
        variant="dot"
        overlap="circular"
        invisible={!senderIsOnline()}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Avatar src={avatarSrc}>
          <SvgIcon>
            <PiUserThin />
          </SvgIcon>
        </Avatar>
      </Badge>
    </ListItemAvatar>
  );
};
