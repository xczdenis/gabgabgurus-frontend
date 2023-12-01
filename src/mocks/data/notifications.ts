import {
  TNotificationMessageResponse,
  TNotificationResponse,
  TNotificationSenderResponse,
} from '@/lib/types/notification_response';
import { createResourceId } from '@/lib/utils/create-resource-id';
import { subHours } from 'date-fns';

const now = new Date();

function makeNotificationSender(params?: Partial<TNotificationSenderResponse>): TNotificationSenderResponse {
  return {
    id: createResourceId(),
    avatar: '/assets/avatars/avatar10.png',
    first_name: 'Jie Yang Song',
    last_activity: subHours(now, 2).getTime(),
    ...params,
  };
}

function makeNotificationMessage(
  params?: Partial<TNotificationMessageResponse>,
  senderParams?: Partial<TNotificationSenderResponse>
): TNotificationMessageResponse {
  return {
    id: createResourceId(),
    text: "Hi! I'm Alex, and I'm looking to improve my Spanish. I love traveling and cooking. What about you?",
    sender: makeNotificationSender(senderParams),
    ...params,
  };
}

function makeNotification({
  params,
  msgParams,
  senderParams,
}: {
  params?: Partial<TNotificationResponse>;
  msgParams?: Partial<TNotificationMessageResponse>;
  senderParams?: Partial<TNotificationSenderResponse>;
} = {}): TNotificationResponse {
  return {
    id: createResourceId(),
    message: makeNotificationMessage(msgParams, senderParams),
    createdAt: subHours(now, 2).getTime(),
    is_read: Math.random() < 0.5,
    ...params,
  };
}

export const notifications: TNotificationResponse[] = [
  makeNotification(),
  makeNotification({
    msgParams: {
      text: "Hey there! I'm Isabella and I'm trying to learn Italian for my upcoming trip to Rome. Are you a foodie too? I'm looking to improve my Spanish. I love traveling and cooking. What about you?",
    },
    senderParams: {
      avatar: '/assets/avatars/avatar10.png',
      first_name: 'Ivan',
    },
  }),
  makeNotification({
    msgParams: {
      text: 'Hello!',
    },
    senderParams: {
      avatar: '/assets/avatars/avatar09.png',
      first_name: 'Petr',
    },
  }),
  makeNotification({
    msgParams: {
      text: 'Goodly',
    },
    senderParams: {
      avatar: '/assets/avatars/avatar08.png',
      first_name: 'Alla',
    },
  }),
];
