import { MessageStatuses } from '@/config';
import { TMessage } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';

export const getUnreadMessagesIds = (messagePagination: TMessage[], userId: TDefaultId): TDefaultId[] => {
  return messagePagination.reduce((acc: TDefaultId[], msg) => {
    if (msg.sender.id !== userId && msg.status !== MessageStatuses.Read) {
      acc.push(msg.id);
    }
    return acc;
  }, []);
};
