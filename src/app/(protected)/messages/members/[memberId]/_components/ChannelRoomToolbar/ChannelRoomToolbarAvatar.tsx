'use client';

import { GroupAvatar } from '@/components/GroupAvatar';
import { TAvatarGroupMember } from '@/components/GroupAvatar/types';
import { GroupDisplayName } from '@/components/GroupDisplayName';
import { TGroupDisplayNameMember } from '@/components/GroupDisplayName/types';
import { UserPresenceStatus } from '@/components/UserPresenceStatus';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/chat';
import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';

type TChatThreadToolbarGroupMember = { lastActivity: number } & TGroupDisplayNameMember & TAvatarGroupMember;

type TProps = {
  memberProfile: TChatThreadToolbarGroupMember;
  participants?: TChatThreadToolbarGroupMember[];
};

export const ChannelRoomToolbarAvatar = (props: TProps) => {
  const { participants = [], memberProfile } = props;
  const lastActivityOfPeer = useAppSelector((state) => state.chat.lastActivityOfPeer);
  const dispatch = useAppDispatch();

  if (memberProfile && participants.length === 0) {
    participants.push(memberProfile);
  }

  useEffect(() => {
    dispatch(thunks.setLastActivityOfPeer(memberProfile.lastActivity));
  }, [dispatch, memberProfile.lastActivity]);

  return (
    <Stack alignItems="center" direction="row" spacing={2}>
      <GroupAvatar members={participants} />
      <Box>
        <GroupDisplayName members={participants} />
        <UserPresenceStatus lastActivity={lastActivityOfPeer} updateStatusByInterval={true} />
      </Box>
    </Stack>
  );
};
