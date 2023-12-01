import { TMessagePagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { chatWsService } from '@/modules/services';
import { getUnreadMessagesIds } from './get-unread-messages-ids';

export const markMessagesAsRead = (messagePagination: TMessagePagination, userId: TDefaultId) => {
  const ids = getUnreadMessagesIds(messagePagination, userId);
  chatWsService.markChannelMessagesAsRead(ids, userId);
};
