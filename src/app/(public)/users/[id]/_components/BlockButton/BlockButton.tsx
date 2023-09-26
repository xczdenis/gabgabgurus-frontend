'use client';

import { error } from '@/theme/colors';
import { IconButton, Tooltip } from '@mui/material';
import { TProps } from './types';
import { CgUnblock } from 'react-icons/cg';
import { useState } from 'react';
import { SiAdblock } from 'react-icons/si';
import { useSwitchMemberBlocking } from '@/lib/hooks/use-switch-member-blocking';

const BlockButton: React.FC<TProps> = (props) => {
  const { memberId, isBlocked: isBlockedDefault } = props;
  const { switchMemberBlocking } = useSwitchMemberBlocking();
  const [isBlocked, setIsBlocked] = useState(isBlockedDefault);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBlockButtonClick = () => {
    setIsSubmitting(true);

    switchMemberBlocking(!isBlocked, memberId).then(() => {
      setIsBlocked((prev) => !prev);
      setIsSubmitting(false);
    });
  };

  return (
    <>
      {isBlocked ? (
        <Tooltip title="Unblock user">
          <IconButton disabled={isSubmitting} onClick={handleBlockButtonClick}>
            <CgUnblock />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Block user">
          <IconButton disabled={isSubmitting} onClick={handleBlockButtonClick}>
            <SiAdblock color={error.main} />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default BlockButton;
