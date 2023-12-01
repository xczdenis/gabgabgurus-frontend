'use client';

import { Avatar, avatarClasses, AvatarGroup } from '@mui/material';
import { TProps } from './types';

const GroupAvatar = (props: TProps) => {
  const { members } = props;

  const groupThread = members && members.length > 1;

  return (
    <AvatarGroup
      max={2}
      sx={{
        [`& .${avatarClasses.root}`]: groupThread
          ? {
              height: 26,
              width: 26,
              '&:nth-of-type(2)': {
                mt: '10px',
              },
            }
          : {
              height: 36,
              width: 36,
            },
      }}
    >
      {members && members.map((member) => <Avatar key={member.id} src={member.avatar} />)}
    </AvatarGroup>
  );
};

export default GroupAvatar;
