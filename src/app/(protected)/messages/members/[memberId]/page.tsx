import { softCall } from '@/lib/utils/soft-call';
import { chatService, userService } from '@/modules/services';
import { Box } from '@mui/material';
import { ChannelRoom } from './_components/ChannelRoom';
import { TProps } from './types';

export default async function ChatPage(props: TProps) {
  const { memberId } = (await props.params);
  const memberIdInt = parseInt(memberId);

  if (!memberIdInt) {
    return null;
  }

  const channel = await softCall(() => chatService.getPrivateChannelByMemberId(memberIdInt));
  const memberProfile = await softCall(() => userService.getMemberProfile(memberIdInt));

  if (!memberProfile) {
    return null;
  }

  return (
    <Box
      sx={{
        bottom: 0,
        display: 'flex',
        left: 0,
        position: 'absolute',
        right: 0,
        top: 0,
      }}
    >
      <ChannelRoom channel={channel} memberProfile={memberProfile} />
    </Box>
  );
}
