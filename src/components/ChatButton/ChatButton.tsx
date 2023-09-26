import { buildUrl } from '@/lib/utils/build-url';
import { urls } from '@/urls';
import { Button } from '@mui/material';
import { VscSend } from 'react-icons/vsc';
import { TProps } from './types';

const ChatButton = <C extends React.ElementType>(props: TProps<C>) => {
  const { children, memberId, ...rest } = props;

  return (
    <Button
      href={buildUrl(urls.chats.personal, { path: { memberId: memberId } })}
      target="_blank"
      size="medium"
      variant="outlined"
      startIcon={<VscSend />}
      {...rest}
    >
      {children ? children : 'Chat'}
    </Button>
  );
};
export default ChatButton;
