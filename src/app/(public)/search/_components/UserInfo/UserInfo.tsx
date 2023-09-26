import { ChatButton } from '@/components/ChatButton';
import { UserAvatar } from '@/components/UserAvatar';
import { buildUrl } from '@/lib/utils/build-url';
import { urls } from '@/urls';
import { Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { UserOnlineStatus } from '../UserOnlineStatus';
import { TProps } from './types';

const UserInfo: React.FC<TProps> = (props) => {
  const { user } = props;
  const userDetailUrl = buildUrl(urls.users.detail, { path: { id: user.id } });

  return (
    <Stack alignItems="center" direction="column" spacing={1}>
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

      <UserOnlineStatus status={'online'} />
      <ChatButton memberId={user.id} />
    </Stack>
  );
};

export default UserInfo;
