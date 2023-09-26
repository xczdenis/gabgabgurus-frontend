import { Dispatch } from 'redux';
import { slice } from '@/store/slices/chat';
import { chatService } from '@/services';
import { TDefaultId } from '@/lib/types/common';
import { TPaginationParams } from '@/lib/types/pagination';
import { TSendMessageParams } from '@/services/data-gateways/interfaces/chat-gateway';

const fetchMessages = (chatId: TDefaultId, options?: TPaginationParams) => async (dispatch: Dispatch) => {
  return chatService
    .getChatMessages(chatId, options)
    .then((messagePagination) => {
      dispatch(
        slice.actions.setMessages({
          data: messagePagination.results.reverse(),
          next: messagePagination.next,
          count: messagePagination.count,
        })
      );
      return messagePagination;
    })
    .catch((error) => {
      dispatch(slice.actions.removeMessages());
      throw error;
    });
};

const sendMessage = (params: TSendMessageParams) => async (dispatch: Dispatch) => {
  return chatService
    .sendMessage(params)
    .then((message) => {
      dispatch(slice.actions.addMessage(message));
      return message;
    })
    .catch((error) => {
      throw error;
    });
};

const setChatBlocking = (isBlocked: boolean) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setChatBlocking(isBlocked));
};

export const thunks = {
  fetchMessages,
  sendMessage,
  setChatBlocking,
};
