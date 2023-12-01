import { TMessage, TMessagePagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { TGetMessagesParams } from '@/modules/data-gateways/interfaces/channel-gateway';
import { chatService } from '@/modules/services';
import { slice } from '@/store/slices/chat';
import { Dispatch } from 'redux';

const fetchMessages =
  (params: TGetMessagesParams, setOrAppend: 'set' | 'append' = 'set') =>
  async (dispatch: Dispatch) => {
    let messagePagination: TMessagePagination;

    try {
      messagePagination = await chatService.getMessages(params);
    } catch (error) {
      dispatch(slice.actions.removeMessages());
      throw error;
    }

    const payload = {
      ...messagePagination,
      results: messagePagination.results.reverse(),
    };

    if (setOrAppend === 'set') {
      dispatch(slice.actions.setMessages(payload));
    } else {
      dispatch(slice.actions.appendMessages(payload));
    }

    return messagePagination;
  };

const sendMessage = (channelId: TDefaultId | null, text: string) => async (dispatch: Dispatch) => {
  if (channelId && text) {
    const message = await chatService.sendMessage(channelId, text);
    dispatch(slice.actions.addMessage(message));
    return message;
  }
  return null;
};

const addMessage = (message: TMessage) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.addMessage(message));
};

const setChatIsBlocked = (isBlocked: boolean) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setChatIsBlocked(isBlocked));
};

const setChannelId = (channelId: TDefaultId) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setChannelId(channelId));
};

const fetchPrivateChannel = (memberId: TDefaultId) => async (dispatch: Dispatch) => {
  const privateChannel = await chatService.getPrivateChannelByMemberId(memberId);
  if (privateChannel) {
    dispatch(slice.actions.setChannelId(privateChannel.id));
  }
  return privateChannel;
};

const initPrivateDialog = (memberId: TDefaultId) => async (dispatch: Dispatch) => {
  const channelId = await chatService.initPrivateDialog(memberId);
  if (channelId) {
    dispatch(slice.actions.setChannelId(channelId));
  }
  return channelId;
};

const setLastActivity = (lastActivity: number) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setLastActivity(lastActivity));
};

const setLastActivityOfPeer = (lastActivity: number) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.setLastActivityOfPeer(lastActivity));
};

const markMessagesAsRead = (messageIds: TDefaultId[]) => async (dispatch: Dispatch) => {
  dispatch(slice.actions.markMessagesAsRead(messageIds));
};

export const thunks = {
  fetchMessages,
  sendMessage,
  addMessage,
  setChatIsBlocked,
  setChannelId,
  fetchPrivateChannel,
  initPrivateDialog,
  setLastActivity,
  setLastActivityOfPeer,
  markMessagesAsRead,
};
