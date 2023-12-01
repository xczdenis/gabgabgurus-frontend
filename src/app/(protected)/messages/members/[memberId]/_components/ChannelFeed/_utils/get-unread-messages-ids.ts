import { MessageStatuses } from '@/config';
import { TMessagePagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';

export const getUnreadMessagesIds = (messagePagination: TMessagePagination, userId: TDefaultId): TDefaultId[] => {
  return messagePagination.results.reduce((acc: TDefaultId[], msg) => {
    if (msg.sender.id !== userId && msg.status !== MessageStatuses.Read) {
      acc.push(msg.id);
    }
    return acc;
  }, []);
};
