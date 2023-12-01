import { Box, Stack } from '@mui/material';
import { ChannelRoomToolbarAvatar } from './ChannelRoomToolbarAvatar';
import { ChannelRoomToolbarMenu } from './ChannelRoomToolbarMenu';
import { TProps } from './types';

const ChannelRoomToolbar = (props: TProps) => {
  const { memberProfile } = props;

  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="space-between"
      spacing={2}
      sx={{
        minHeight: 64,
        px: 2,
        py: 1,
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <ChannelRoomToolbarAvatar memberProfile={memberProfile} />
      </Box>
      <ChannelRoomToolbarMenu memberProfile={memberProfile} />
    </Stack>
  );
};

export default ChannelRoomToolbar;
