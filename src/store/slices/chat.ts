import { MessageStatuses } from '@/config';
import { TMessage, TMessagePagination } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IChatState {
  messages: TMessage[];
  next: string | null;
  isBlocked: boolean;
  channelId: TDefaultId | null;
  socketIsOpen: boolean;
  lastActivity: number;
  lastActivityOfPeer: number;
}

const initialState: IChatState = {
  messages: [],
  next: null,
  isBlocked: false,
  channelId: null,
  socketIsOpen: false,
  lastActivity: 0,
  lastActivityOfPeer: 0,
};

const reducers = {
  setMessages(state: IChatState, action: PayloadAction<TMessagePagination>) {
    state.messages = action.payload.results;
    state.next = action.payload.next;
  },
  appendMessages(state: IChatState, action: PayloadAction<TMessagePagination>) {
    state.messages = [...action.payload.results, ...state.messages];
    state.next = action.payload.next;
  },
  removeMessages(state: IChatState) {
    state.messages = [];
  },
  addMessage(state: IChatState, action: PayloadAction<TMessage>) {
    state.messages.push(action.payload);
  },
  setChatIsBlocked(state: IChatState, action: PayloadAction<boolean>) {
    state.isBlocked = action.payload;
  },
  setChannelId(state: IChatState, action: PayloadAction<TDefaultId>) {
    state.channelId = action.payload;
  },
  setSocketIsOpen(state: IChatState, action: PayloadAction<boolean>) {
    state.socketIsOpen = action.payload;
  },
  setLastActivity(state: IChatState, action: PayloadAction<number>) {
    state.lastActivity = action.payload;
  },
  setLastActivityOfPeer(state: IChatState, action: PayloadAction<number>) {
    state.lastActivityOfPeer = action.payload;
  },
  markMessagesAsRead(state: IChatState, action: PayloadAction<TDefaultId[]>) {
    action.payload.forEach((payloadMsgId) => {
      const message = state.messages.find((stateMsg) => stateMsg.id === payloadMsgId);
      if (message) {
        message.status = MessageStatuses.Read;
      }
    });
  },
};

export const slice = createSlice({
  name: 'chat',
  initialState,
  reducers,
});

export const { reducer } = slice;
