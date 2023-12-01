'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import { IUser } from '@/lib/types/user';
import { ComponentType } from 'react';

const COMPONENT_DISPLAY_NAME_PREFIX = 'withAuthenticatedUser';

export type TWithAuthenticatedUserProps = {
  isAuthenticated: boolean;
  user: IUser;
};

export const withAuthenticatedUser = <TProps extends TWithAuthenticatedUserProps>(
  WrappedComponent: ComponentType<TProps>
) => {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ResultComponent = (props: Omit<TProps, keyof TWithAuthenticatedUserProps>) => {
    const { isAuthenticated, user } = useAuth();

    if (!isAuthenticated || !user) {
      return null;
    }

    return <WrappedComponent {...{ isAuthenticated, user }} {...(props as TProps)} />;
  };

  ResultComponent.displayName = `${COMPONENT_DISPLAY_NAME_PREFIX}${displayName}`;

  return ResultComponent;
};
