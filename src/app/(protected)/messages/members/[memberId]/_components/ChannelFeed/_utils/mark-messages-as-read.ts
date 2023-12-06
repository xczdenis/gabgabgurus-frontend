import { TMessagePagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { chatWsService } from '@/modules/services';
import { getUnreadMessagesIds } from './get-unread-messages-ids';

export const markUnreadMessagesAsRead = (messagePagination: TMessagePagination, userId: TDefaultId) => {
  const ids = getUnreadMessagesIds(messagePagination, userId);
  try {
    chatWsService.markChannelMessagesAsRead(ids, userId);
  } catch (e) {
    console.error('Failed to mark messages as read');
    console.error(e);
  }
  // chatService.markChannelMessagesAsRead(ids, userId).catch(() => {
  //   console.error('Failed to mark messages as read');
  // });
};
