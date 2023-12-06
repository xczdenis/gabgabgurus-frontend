'use client';

import { Preloader } from '@/components/Preloader';
import { useAppDispatch } from '@/lib/hooks/store';
import { useIam } from '@/lib/hooks/swr/use-iam';
import { useOAuthSignIn } from '@/lib/hooks/swr/use-oAuth-signIn';
import { useAuth } from '@/lib/hooks/use-auth';
import { showToastSuccess } from '@/lib/utils/show-toast-success';
import { thunks } from '@/store/thunks/auth';
import { urls } from '@/urls';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const state = searchParams.get('state');
  const code = searchParams.get('code');
  const { user } = useOAuthSignIn({ state, code });

  const { revalidate } = useIam();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated && user) {
      dispatch(thunks.initializeThunk(user)).then(async () => {
        await revalidate();
        showToastSuccess(`Welcome ${user.firstName}!`, '👏');
        router.push(urls.index);
      });
    }
  }, [dispatch, isAuthenticated, revalidate, router, user]);

  return <Preloader />;
}
