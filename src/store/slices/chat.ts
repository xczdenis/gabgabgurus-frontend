import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TChatMessage } from '@/lib/types/chat';

type TMessagePagination = {
  data: TChatMessage[];
  next: number | null;
  count: number;
};

interface IChatState {
  messages: TChatMessage[];
  next: number | null;
  count: number;
  isBlocked: boolean;
}

const initialState: IChatState = {
  messages: [],
  next: null,
  count: 0,
  isBlocked: false,
};

const reducers = {
  setMessages(state: IChatState, action: PayloadAction<TMessagePagination>) {
    state.messages = [...action.payload.data, ...state.messages];
    state.next = action.payload.next;
    state.count = action.payload.count;
  },
  removeMessages(state: IChatState) {
    state.messages = [];
  },
  addMessage(state: IChatState, action: PayloadAction<TChatMessage>) {
    state.messages.push(action.payload);
  },
  setChatBlocking(state: IChatState, action: PayloadAction<boolean>) {
    state.isBlocked = action.payload;
  },
};

export const slice = createSlice({
  name: 'chat',
  initialState,
  reducers,
});

export const { reducer } = slice;
