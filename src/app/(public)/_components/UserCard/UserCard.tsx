import { ChatButton } from '@/components/ChatButton';
import { LanguageLevelIcon } from '@/components/LanguageLevelIcon';
import { buildUrl } from '@/lib/utils/build-url';
import { urls } from '@/urls';
import { Avatar, Box, Card, Divider, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { TProps } from './types';
import { UserCardLink } from './UserCardLink';

const UserCard = (props: TProps) => {
  const { user } = props;
  const userDetailUrl = buildUrl(urls.users.detail, { path: { id: user.id } });
  const searchUrl = buildUrl(urls.search, { query: { country: user.country } });

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2 }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            mt: 2,
          }}
        >
          <Avatar src={user.avatar} component={Link} href={userDetailUrl} sx={{ textDecoration: 'none' }} />
          <Box sx={{ ml: 2 }}>
            <UserCardLink href={userDetailUrl} text={user.firstName} />
            <Typography color="text.secondary" variant="body2">
              from <UserCardLink variant="subtitle2" href={searchUrl} text={user.country} />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ pb: 2, px: 3 }}>
        <Typography color="text.secondary" variant="body2">
          {user.aboutMe.slice(0, 500)}
        </Typography>
      </Box>
      <Box sx={{ px: 3, py: 2 }}>
        <Stack alignItems="top" direction="row" justifyContent="space-around" spacing={3}>
          <div>
            <Typography variant="subtitle2">Speaks</Typography>
            <List>
              {user.speaks.map((language) => (
                <ListItem key={language.language} disablePadding>
                  <ListItemText secondary={language.language} sx={{ mr: 2 }} />
                  <LanguageLevelIcon level={language.languageLevel} />
                </ListItem>
              ))}
            </List>
          </div>
          <div>
            <Typography variant="subtitle2">Learning</Typography>
            <List>
              {user.learning.map((language) => (
                <ListItem key={language.language} disablePadding>
                  <ListItemText secondary={language.language} sx={{ mr: 2 }} />
                  <LanguageLevelIcon level={language.languageLevel} />
                </ListItem>
              ))}
            </List>
          </div>
        </Stack>
      </Box>
      <Box sx={{ mt: 'auto' }}>
        <Divider />
        <Box sx={{ p: 2 }}>
          <ChatButton memberId={user.id} size="medium" />
        </Box>
      </Box>
    </Card>
  );
};

export default UserCard;
