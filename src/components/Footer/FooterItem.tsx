'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import { urls } from '@/urls';
import { Link } from '@mui/material';
import NextLink from 'next/link';
import { TFooterSectionsItem } from './types';

type TProps = {
  item: TFooterSectionsItem;
};

export const FooterItem = (props: TProps) => {
  const { item } = props;
  const { isAuthenticated } = useAuth();

  const getLink = (): string => {
    if (item.auth) {
      return isAuthenticated ? item.path ?? '#' : urls.auth.signin;
    }
    return item.path ?? '#';
  };

  return (
    <Link component={NextLink} href={getLink()} color="text.primary" variant="subtitle2">
      {item.title}
    </Link>
  );
};
