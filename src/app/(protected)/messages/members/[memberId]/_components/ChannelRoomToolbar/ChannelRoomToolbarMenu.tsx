'use client';

import { useAppDispatch } from '@/lib/hooks/store';
import { TMemberProfile } from '@/lib/types/user';
import { thunks } from '@/store/thunks/chat';
import { IconButton, Stack, Tooltip } from '@mui/material';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ChannelRoomToolbarMenuPopover } from './ChannelRoomToolbarMenuPopover';

type TProps = {
  moreRef?: React.RefObject<HTMLButtonElement>;
  memberProfile: TMemberProfile | null;
};

export const ChannelRoomToolbarMenu = (props: TProps) => {
  const { memberProfile } = props;
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const moreRef = useRef<HTMLButtonElement | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (memberProfile) {
      dispatch(thunks.setChatIsBlocked(memberProfile.isBlocked));
    }
  }, [dispatch, memberProfile]);

  const handleMenuOpen = useCallback(() => {
    setMenuIsOpen(true);
  }, []);

  const handleMenuClose = useCallback(() => {
    setMenuIsOpen(false);
  }, []);

  return (
    <Stack alignItems="center" direction="row" spacing={1}>
      <Tooltip title="More options">
        <IconButton onClick={handleMenuOpen} ref={moreRef}>
          <AiOutlineMenu />
        </IconButton>
      </Tooltip>

      <ChannelRoomToolbarMenuPopover
        anchorEl={moreRef.current}
        memberProfile={memberProfile}
        isOpen={menuIsOpen}
        handleClose={handleMenuClose}
      />
    </Stack>
  );
};
