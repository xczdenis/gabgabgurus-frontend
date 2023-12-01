'use client';

import { Preloader } from '@/components/Preloader';
import { useAuth } from '@/lib/hooks/use-auth';
import { urls } from '@/urls';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { TProps } from './types';

const AuthGuard = (props: TProps) => {
  const { children } = props;
  const router = useRouter();
  const { isAuthenticated, isInitialized } = useAuth();
  const [checked, setChecked] = useState(false);

  const check = useCallback(() => {
    if (isAuthenticated) {
      setChecked(true);
    } else {
      const searchParams = new URLSearchParams({ next: globalThis.location.href }).toString();
      const href = urls.auth.signin + `?${searchParams}`;
      router.replace(href);
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (isInitialized) {
      check();
    }
  }, [check, isInitialized]);

  if (!isInitialized) {
    return <Preloader />;
  }

  if (!checked) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
