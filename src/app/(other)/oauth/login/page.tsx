'use client';

import { Preloader } from '@/components/Preloader';
import { useAppDispatch } from '@/lib/hooks/store';
import { useIam } from '@/lib/hooks/swr/use-iam';
import { useAuth } from '@/lib/hooks/use-auth';
import { showToastError } from '@/lib/utils/show-toast-error';
import { showToastSuccess } from '@/lib/utils/show-toast-success';
import { oAuthService } from '@/modules/services';
import { thunks } from '@/store/thunks/auth';
import { urls } from '@/urls';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { TProps } from './types';

export default function Home(props: TProps) {
  const { state: st, code: cd } = props.searchParams;
  const searchParams = useSearchParams();
  console.log('searchParams =', searchParams);

  const state = searchParams.get('state');
  const code = searchParams.get('code');

  console.log('state =', state);
  console.log('code =', code);

  // const { user } = useOAuthSignIn({ state, code });
  const { revalidate } = useIam();
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const dispatch = useAppDispatch();

  console.log('state from props =', st);
  console.log('code from props =', cd);

  // useEffect(() => {
  //   if (!isAuthenticated && user) {
  //     dispatch(thunks.initializeThunk(user)).then(async () => {
  //       await revalidate();
  //       toast.success(`Welcome ${user.firstName}!`, { icon: '👏' });
  //       router.push(urls.index);
  //     });
  //   }
  // }, [dispatch, isAuthenticated, revalidate, router, user]);
  useEffect(() => {
    console.log('useEffect. isAuthenticated =', isAuthenticated);
    if (state && code && !isAuthenticated) {
      console.log('useEffect. signIn');
      oAuthService.signIn({ state, code }).then((user) => {
        dispatch(thunks.initializeThunk(user))
          .then(async () => {
            await revalidate();
            showToastSuccess(`Welcome ${user.firstName}!`, '👏');
            router.push(urls.index);
          })
          .catch((error) => {
            console.log('An error occurred');
            console.error(error);
            showToastError();
          });
      });
    }
  }, [code, dispatch, isAuthenticated, revalidate, router, state]);

  return <Preloader />;
}
