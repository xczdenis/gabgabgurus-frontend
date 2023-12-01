'use client';

import { withAuthenticatedUser } from '@/lib/hoks/with-authenticated-user';
import { useNotifyConnection } from './_hook/use-notify-connection';
import { NotificationsButtonContent } from './NotificationsButtonContent';
import { TProps } from './types';

const NotificationsButton = (props: TProps) => {
  const { user } = props;

  const { socketIsOpen } = useNotifyConnection(user.id);

  if (!socketIsOpen) {
    return null;
  }

  return <NotificationsButtonContent />;
};

export default withAuthenticatedUser(NotificationsButton);
