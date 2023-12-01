import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { TMessagePagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { showToastError } from '@/lib/utils/show-toast-error';
import { thunks } from '@/store/thunks/chat';
import { useCallback, useEffect } from 'react';
import { markMessagesAsRead } from '../_utils/mark-messages-as-read';

export const useChannelFeed = (userId: TDefaultId) => {
  const channelId = useAppSelector((state) => state.chat.channelId);
  const dispatch = useAppDispatch();

  const downloadMessages = useCallback(
    async (setOrAppend: 'set' | 'append' = 'set', channelId: number | null = null, offset: number = 0) => {
      if (channelId) {
        let messagePagination: TMessagePagination | null = null;
        try {
          messagePagination = await dispatch(thunks.fetchMessages({ offset, channelId }, setOrAppend));
        } catch {
          showToastError();
        }
        if (messagePagination) {
          markMessagesAsRead(messagePagination, userId);
        }
      }
    },
    [dispatch, userId]
  );

  useEffect(() => {
    downloadMessages('set', channelId);
  }, [channelId, downloadMessages]);

  return { downloadMessages };
};
