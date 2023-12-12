import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { TDefaultId } from '@/lib/types/common';
import { showToastError } from '@/lib/utils/show-toast-error';
import { thunks } from '@/store/thunks/chat';
import { useCallback, useEffect } from 'react';
import { markMessagesAsRead } from '../_utils/mark-messages-as-read';

export const useChannelFeed = (userId: TDefaultId) => {
  const channelId = useAppSelector((state) => state.chat.channelId);
  const socketIsOpen = useAppSelector((state) => state.chat.socketIsOpen);
  const messages = useAppSelector((state) => state.chat.messages);
  const dispatch = useAppDispatch();

  const downloadMessages = useCallback(
    (setOrAppend: 'set' | 'append' = 'set', channelId: number | null = null, offset: number = 0) => {
      if (channelId) {
        dispatch(thunks.fetchMessages({ offset, channelId }, setOrAppend)).catch((error) => {
          console.log(error);
          showToastError();
        });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    downloadMessages('set', channelId);
  }, [channelId, downloadMessages]);

  useEffect(() => {
    if (socketIsOpen) {
      markMessagesAsRead(messages, userId);
    }
  }, [messages, socketIsOpen, userId]);

  return { downloadMessages };
};
