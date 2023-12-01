'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import { useSwitchMemberBlocking } from '@/lib/hooks/use-switch-member-blocking';
import { showToastError } from '@/lib/utils/show-toast-error';
import { error } from '@/theme/colors';
import { Box, IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { CgUnblock } from 'react-icons/cg';
import { SiAdblock } from 'react-icons/si';
import { TProps } from './types';

const BlockButton = (props: TProps) => {
  const { isAuthenticated } = useAuth();
  const { memberId, isBlocked: isBlockedDefault } = props;
  const { switchMemberBlocking } = useSwitchMemberBlocking();
  const [isBlocked, setIsBlocked] = useState(isBlockedDefault);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBlockButtonClick = () => {
    setIsSubmitting(true);

    switchMemberBlocking(!isBlocked, memberId)
      .then(() => {
        setIsBlocked((prev) => !prev);
      })
      .catch((error) => {
        showToastError(error.message);
      })
      .finally(() => setIsSubmitting(false));
  };

  const buttonIsDisabled = !isAuthenticated || isSubmitting;

  return (
    <>
      {isBlocked ? (
        <Tooltip title="Unblock user">
          <Box>
            <IconButton disabled={buttonIsDisabled} onClick={handleBlockButtonClick}>
              <CgUnblock />
            </IconButton>
          </Box>
        </Tooltip>
      ) : (
        <Tooltip title="Block user">
          <Box>
            <IconButton disabled={buttonIsDisabled} onClick={handleBlockButtonClick}>
              <SiAdblock color={buttonIsDisabled ? 'text.secondary' : error.main} />
            </IconButton>
          </Box>
        </Tooltip>
      )}
    </>
  );
};

export default BlockButton;
