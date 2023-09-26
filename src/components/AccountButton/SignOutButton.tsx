'use client';

import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { Box, Button } from '@mui/material';
import { useAuth } from '@/lib/hooks/use-auth';
import { urls } from '@/urls';
import { useRouter } from 'next/navigation';
import { FiLogOut } from 'react-icons/fi';

export type TProps = {
  onClose?: () => void;
};

export const SignOutButton: React.FC<TProps> = (props) => {
  const { onClose } = props;
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = useCallback(async () => {
    try {
      onClose?.();
      signOut()
        .then(() => router.push(urls.index))
        .catch((e) => {
          console.error(e);
        });

      // switch (auth.issuer) {
      //   case Issuer.Amplify: {
      //     await auth.signOut();
      //     break;
      //   }
      //   case Issuer.Auth0: {
      //     await auth.logout();
      //     break;
      //   }
      //   case Issuer.Firebase: {
      //     await auth.signOut();
      //     break;
      //   }
      //   case Issuer.JWT: {
      //     await auth.signOut();
      //     break;
      //   }
      //   default: {
      //     console.warn('Using an unknown Auth Issuer, did not log out');
      //   }
      // }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong!');
    }
  }, [onClose, router, signOut]);

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
