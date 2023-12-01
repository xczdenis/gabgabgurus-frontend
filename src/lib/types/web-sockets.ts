export type TWSMessageType = 'error' | 'message' | 'user_joined' | 'user_blocking' | 'user_read_messages';

export type TWSMessage<T = unknown> = {
  type: TWSMessageType;
  content: T;
};
