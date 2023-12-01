import { GroupAvatar } from '@/components/GroupAvatar';
import { GroupDisplayName } from '@/components/GroupDisplayName';
import { TimeToNow } from '@/components/TimeToNow';
import { Box, Stack, Typography } from '@mui/material';
import { UnreadetMark } from '../UnreadetMark';
import { ChannelListItemContainer } from './ChannelListItemContainer';
import { TProps } from './types';

const ChannelListItem = (props: TProps) => {
  const { channel } = props;
  const isUnread = !!(channel.unreadCount && channel.unreadCount > 0);

  return (
    <ChannelListItemContainer chat={channel}>
      <GroupAvatar members={channel.participants} />
      <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <GroupDisplayName members={channel.participants} />
        <Stack alignItems="center" direction="row" spacing={1}>
          {isUnread && <UnreadetMark />}
          <Typography color="text.secondary" noWrap sx={{ flexGrow: 1 }} variant="subtitle2">
            {channel.lastMessage}
          </Typography>
        </Stack>
      </Box>
      <TimeToNow dateInSeconds={channel.lastActivity} />
    </ChannelListItemContainer>
  );
};

export default ChannelListItem;
