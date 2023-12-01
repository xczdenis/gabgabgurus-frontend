'use client';

import { Preloader } from '@/components/Preloader';
import { useAppDispatch } from '@/lib/hooks/store';
import { useIam } from '@/lib/hooks/swr/use-iam';
import { useOAuthSignIn } from '@/lib/hooks/swr/use-oAuth-signIn';
import { useAuth } from '@/lib/hooks/use-auth';
import { thunks } from '@/store/thunks/auth';
import { urls } from '@/urls';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { TProps } from './types';

export default function Home(props: TProps) {
  const { state, code } = props.searchParams;
  const { user } = useOAuthSignIn({ state, code });
  const { revalidate } = useIam();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isAuthenticated && user) {
      dispatch(thunks.initializeThunk(user)).then(async () => {
        await revalidate();
        toast.success(`Welcome ${user.firstName}!`, { icon: '👏' });
        router.push(urls.index);
      });
    }
  }, [dispatch, isAuthenticated, revalidate, router, user]);

  return <Preloader />;
}
