'use client';

import { Divider, Popover } from '@mui/material';
import { useAuth } from '@/lib/hooks/use-auth';
import { TProps } from './types';
import { UserInfo } from '@/components/AccountButton/UserInfo';
import { UserProfileLink } from '@/components/AccountButton/UserProfileLink';
import { MessagesLink } from '@/components/AccountButton/MessagesLink';
import { SignOutButton } from '@/components/AccountButton/SignOutButton';

export const AccountPopover: React.FC<TProps> = (props) => {
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
      <UserProfileLink user={user} />
      <Divider />
      <MessagesLink />
      <Divider />
      <SignOutButton onClose={onClose} />
    </Popover>
  );
};
