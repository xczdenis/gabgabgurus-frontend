'use client';

import { useAppSelector } from '@/lib/hooks/store';
import { NPEmptyTitle } from './NPEmptyTitle';
import { NPScrollbar } from './NPScrollbar';

type TProps = {
  onClose?: () => void;
};

export const NPBody = (props: TProps) => {
  const { onClose } = props;
  const unreadCount = useAppSelector((state) => state.notifications.unreadCount);

  return <>{unreadCount === 0 ? <NPEmptyTitle /> : <NPScrollbar unreadCount={unreadCount} onClose={onClose} />}</>;
};
