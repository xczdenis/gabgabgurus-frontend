import { Box, Stack, Typography } from '@mui/material';
import { ChatAvatar } from '../ChatAvatar';
import { UnreadetMark } from '../UnreadetMark';
import { LastActivity } from '../LastActivity';
import { ChatDisplayName } from '../ChatDisplayName';
import { TProps } from './types';
import { ChatListItemContainer } from './ChatListItemContainer';

const ChatListItem: React.FC<TProps> = (props) => {
  const { chat } = props;

  const isUnread = !!(chat.unreadCount && chat.unreadCount > 0);

  return (
    <ChatListItemContainer chat={chat}>
      <ChatAvatar chat={chat} />
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <ChatDisplayName chat={chat} />
        <Stack alignItems="center" direction="row" spacing={1}>
          {isUnread && <UnreadetMark />}
          <Typography color="text.secondary" noWrap sx={{ flexGrow: 1 }} variant="subtitle2">
            {'displayContent'}
          </Typography>
        </Stack>
      </Box>
      <LastActivity variant="short" lastActivity={chat.lastActivity} />
    </ChatListItemContainer>
  );
};

export default ChatListItem;
