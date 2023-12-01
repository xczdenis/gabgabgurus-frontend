'use client';

import { AccountButton } from '@/components/AccountButton';
import { useAuth } from '@/lib/hooks/use-auth';
import { urls } from '@/urls';
import { Button } from '@mui/material';
import Link from 'next/link';

const TopNavLoginButton = () => {
  const { isInitialized, isAuthenticated } = useAuth();

  if (!isInitialized) {
    return null;
  }

  return (
    <>
      {isAuthenticated ? (
        <AccountButton />
      ) : (
        <Button component={Link} size="small" href={urls.auth.signin} variant="outlined">
          Sign in
        </Button>
      )}
    </>
  );
};

export default TopNavLoginButton;
