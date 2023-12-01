'use client';

import { Scrollbar } from '@/components/Scrollbar';
import { NPNotificationList } from './NPNotificationList';
import { NPShowAll } from './NPShowAll';

type TProps = {
  unreadCount: number;
  onClose?: () => void;
};

export const NPScrollbar = (props: TProps) => {
  const { unreadCount, onClose } = props;

  return (
    <Scrollbar sx={{ maxHeight: 550 }}>
      <NPNotificationList />
      <NPShowAll unreadCount={unreadCount} onClick={onClose} />
    </Scrollbar>
  );
};
