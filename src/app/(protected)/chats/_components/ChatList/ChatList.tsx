import { Stack } from '@mui/material';
import { BasePagination } from '@/components/BasePagination';
import { ChatListItem } from '../ChatListItem';
import { TProps } from './types';

const ChatList: React.FC<TProps> = (props) => {
  const { chatPagination } = props;
  const { current: page, results: chats, count } = chatPagination;

  return (
    <>
      <Stack
        component="ul"
        spacing={0.5}
        sx={{
          listStyle: 'none',
          m: 0,
          p: 2,
        }}
      >
        {chats.map((chat) => (
          <ChatListItem key={chat.id} chat={chat} />
        ))}
      </Stack>
      <BasePagination page={page} count={count} />
    </>
  );
};

export default ChatList;
