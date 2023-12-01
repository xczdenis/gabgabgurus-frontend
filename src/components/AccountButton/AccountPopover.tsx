'use client';

import { SignOutButton } from '@/components/AccountButton/SignOutButton';
import { UserInfo } from '@/components/AccountButton/UserInfo';
import { PopoverMenuLink } from '@/components/PopoverMenuLink';
import { useAuth } from '@/lib/hooks/use-auth';
import { urls } from '@/urls';
import { Avatar, Divider, Popover } from '@mui/material';
import { PiChatsLight } from 'react-icons/pi';
import { TProps } from './types';

export const AccountPopover = (props: TProps) => {
  const { anchorEl, onClose, open, ...other } = props;
  const { user } = useAuth();

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
      disableScrollLock
      onClose={onClose}
      open={open}
      slotProps={{ paper: { sx: { width: 200 } } }}
      {...other}
    >
      <UserInfo user={user} />
      <Divider />
      <PopoverMenuLink url={urls.profile} title="Profile" icon={<Avatar src={user?.avatar} />} isSvgIcon={false} />
      <Divider />
      <PopoverMenuLink url={urls.chats.list} title="Messages" icon={<PiChatsLight />} />
      <Divider />
      <SignOutButton onClose={onClose} />
    </Popover>
  );
};
