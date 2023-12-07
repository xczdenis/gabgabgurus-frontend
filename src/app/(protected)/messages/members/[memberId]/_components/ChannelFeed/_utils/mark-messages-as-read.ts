import { TMessage } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { chatWsService } from '@/modules/services';
import { getUnreadMessagesIds } from './get-unread-messages-ids';

export const markMessagesAsRead = (messages: TMessage[], userId: TDefaultId) => {
  const ids = getUnreadMessagesIds(messages, userId);
  try {
    chatWsService.markChannelMessagesAsRead(ids, userId);
  } catch (e) {
    console.error('Failed to mark messages as read');
    console.error(e);
  }
};
