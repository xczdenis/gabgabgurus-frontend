'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import { Box, Button } from '@mui/material';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { FiLogOut } from 'react-icons/fi';

export type TProps = {
  onClose?: () => void;
};

export const SignOutButton = (props: TProps) => {
  const { onClose } = props;
  const { signOut } = useAuth();

  const handleSignOut = useCallback(() => {
    try {
      onClose?.();
      signOut();
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, [onClose, signOut]);

  return (
    <Box
      sx={{
        display: 'flex',
        p: 1,
        justifyContent: 'center',
      }}
    >
      <Button color="inherit" onClick={handleSignOut} size="small" startIcon={<FiLogOut />}>
        Sign out
      </Button>
    </Box>
  );
};
