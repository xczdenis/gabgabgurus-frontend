import { Box, Divider, Stack } from '@mui/material';
import { ChannelFeed } from '../ChannelFeed';
import { ChannelRoomToolbar } from '../ChannelRoomToolbar';
import { MessageInputBox } from '../MessageInputBox';
import { ChannelRoomBlockAlert } from './ChannelRoomBlockAlert';
import { TProps } from './types';

const ChannelRoom = (props: TProps) => {
  const { channel, memberProfile } = props;

  return (
    <Stack
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
      }}
    >
      <ChannelRoomToolbar memberProfile={memberProfile} />
      <Divider />
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <ChannelFeed currentChannelId={channel?.id} memberProfile={memberProfile} />
      </Box>
      <ChannelRoomBlockAlert />
      <Divider />
      <MessageInputBox currentChannelId={channel?.id} memberProfile={memberProfile} />
    </Stack>
  );
};

export default ChannelRoom;
