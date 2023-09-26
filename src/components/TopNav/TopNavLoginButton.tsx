'use client';

import { Button } from '@mui/material';
import { AccountButton } from '@/components/AccountButton';
import { useAuth } from '@/lib/hooks/use-auth';
import { urls } from '@/urls';
import Link from 'next/link';

const TopNavLoginButton: React.FC = () => {
  const { isInitialized, isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <AccountButton />
      ) : isInitialized ? (
        <>
          <Button component={Link} size="small" href={urls.auth.signin} variant="outlined">
            Sign in
          </Button>
        </>
      ) : null}
    </>
  );
};

export default TopNavLoginButton;
