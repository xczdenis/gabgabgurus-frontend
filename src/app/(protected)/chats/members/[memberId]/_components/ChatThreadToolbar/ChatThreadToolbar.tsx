'use client';

import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Stack, SvgIcon, Tooltip } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { SiAdblock } from 'react-icons/si';
import { error } from '@/theme/colors';
import { ChatAvatar } from '@/app/(protected)/chats/_components/ChatAvatar';
import { ChatDisplayName } from '@/app/(protected)/chats/_components/ChatDisplayName';
import { LastActivity } from '@/app/(protected)/chats/_components/LastActivity';
import { TProps } from './types';
import { useSwitchMemberBlocking } from '@/lib/hooks/use-switch-member-blocking';
import { CgUnblock } from 'react-icons/cg';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/chat';

const ChatThreadToolbar: React.FC<TProps> = (props) => {
  const { chat, recipient } = props;
  const { switchMemberBlocking } = useSwitchMemberBlocking();
  const { isBlocked } = useAppSelector((state) => state.chat);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      dispatch(thunks.setChatBlocking(recipient.isBlocked));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleMenuOpen = useCallback(() => {
    setOpenMenu(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setOpenMenu(false);
  }, []);

  const handleBlockClick = () => {
    switchMemberBlocking(!isBlocked, recipient.id).then(() => {
      dispatch(thunks.setChatBlocking(!isBlocked));
    });
  };

  return (
    <>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          flexShrink: 0,
          minHeight: 64,
          px: 2,
          py: 1,
        }}
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          <ChatAvatar chat={chat} />
          <div>
            <ChatDisplayName chat={chat} />
            <LastActivity lastActivity={chat.lastActivity} />
          </div>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={1}>
          <Tooltip title="More options">
            <IconButton onClick={handleMenuOpen} ref={moreRef}>
              <AiOutlineMenu />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
      <Menu anchorEl={moreRef.current} keepMounted onClose={handleMenuClose} open={openMenu}>
        <MenuItem onClick={handleBlockClick}>
          <ListItemIcon>
            <SvgIcon>{isBlocked ? <CgUnblock /> : <SiAdblock color={error.main} />}</SvgIcon>
          </ListItemIcon>
          <ListItemText primary={isBlocked ? 'Unblock user' : 'Block user'} />
        </MenuItem>
      </Menu>
    </>
  );
};

export default ChatThreadToolbar;
