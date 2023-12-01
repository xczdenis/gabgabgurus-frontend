'use client';

import { useIsBreakpointUp } from '@/lib/hooks/use-is-breakpoint-up';
import { Avatar } from '@mui/material';
import { TProps } from './types';

const UserAvatar = (props: TProps) => {
  const { src, responsible = true } = props;
  const lgUp = useIsBreakpointUp('lg');
  const avatarSize = !responsible ? 80 : lgUp ? 80 : 48;

  return <Avatar src={src} sx={{ height: avatarSize, width: avatarSize }} />;
};

export default UserAvatar;
