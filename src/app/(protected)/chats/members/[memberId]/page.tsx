import { Box } from '@mui/material';
import { chatService, userService } from '@/services';
import { ChatThread } from './_components/ChatThread';
import { TProps } from './types';

export default async function ChatPage(props: TProps) {
  const { memberId } = props.params;
  const memberIdInt = parseInt(memberId);

  const chat = await chatService.getChatByMemberId(memberIdInt);
  const recipient = await userService.getMemberProfile(memberIdInt);

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
      <ChatThread chat={chat} recipient={recipient} />
    </Box>
  );
}
