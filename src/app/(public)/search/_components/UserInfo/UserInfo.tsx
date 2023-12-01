import { ChatButton } from '@/components/ChatButton';
import { UserAvatar } from '@/components/UserAvatar';
import { UserPresenceStatus } from '@/components/UserPresenceStatus';
import { buildUrl } from '@/lib/utils/build-url';
import { urls } from '@/urls';
import { Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { TProps } from './types';

const UserInfo = (props: TProps) => {
  const { user } = props;
  const userDetailUrl = buildUrl(urls.users.detail, { path: { id: user.id } });

  return (
    <Stack alignItems="center" direction="column" spacing={1} pt={2}>
      <Link
        href={userDetailUrl}
        color="text.primary"
        sx={{ cursor: 'pointer', textDecoration: 'none' }}
        alignItems="center"
        display="flex"
        flexDirection="column"
        component={NextLink}
      >
        <UserAvatar src={user.avatar} />
        <Typography variant="h5">{user.firstName}</Typography>
      </Link>
      <Typography variant="subtitle2">{user.country}</Typography>
      <UserPresenceStatus lastActivity={user.lastActivity} />
      <ChatButton memberId={user.id} />
    </Stack>
  );
};

export default UserInfo;
