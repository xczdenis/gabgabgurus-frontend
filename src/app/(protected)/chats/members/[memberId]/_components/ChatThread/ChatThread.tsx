import { Box, Divider, Stack } from '@mui/material';
import { ChatThreadToolbar } from '../ChatThreadToolbar';
import { ChatMessageAdd } from '../ChatMessageAdd';
import { ChatMessages } from '../ChatMessages';
import { TProps } from './types';
import { ChatThreadBlockAlert } from './ChatThreadBlockAlert';

const ChatThread: React.FC<TProps> = (props) => {
  const { chat, recipient } = props;

  return (
    <Stack
      sx={{
        flexGrow: 1,
        overflow: 'hidden',
      }}
    >
      <ChatThreadToolbar chat={chat} recipient={recipient} />
      <Divider />
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <ChatMessages chat={chat} />
      </Box>
      <ChatThreadBlockAlert />
      <Divider />
      <ChatMessageAdd chat={chat} />
    </Stack>
  );
};

export default ChatThread;
