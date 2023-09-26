import { subHours } from 'date-fns';
import { NotificationType, TNotification } from '@/lib/types/notification';

const now = new Date();

function makeNotification(params: Record<string, unknown>): TNotification {
  return {
    id: Math.floor(Math.random() * 10000) + 1,
    author: 'Jie Yang Song',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subHours(now, 2).getTime(),
    read: Math.random() < 0.5,
    text: "Hi! I'm Alex, and I'm looking to improve my Spanish. I love traveling and cooking. What about you?",
    type: NotificationType.PersonalMessage,
    ...params,
  };
}
export const notifications: TNotification[] = [
  makeNotification({
    author: 'Isabella Roselies',
    createdAt: subHours(now, 2).getTime(),
    avatar: '/assets/avatars/avatar.png',
    text: "Hey there! I'm Isabella and I'm trying to learn Italian for my upcoming trip to Rome. Are you a foodie too? I'm looking to improve my Spanish. I love traveling and cooking. What about you?",
  }),
  makeNotification({
    author: 'Ivan',
    createdAt: subHours(now, 1).getTime(),
    avatar: '/assets/avatars/avatar-alcides-antonio.png',
    text: "Hello! My name is Ivan. I'm a native Russian speaker and want to practice my English. Do you enjoy sports?",
  }),
  makeNotification({
    author: 'Petr',
    createdAt: subHours(now, 2).getTime(),
    avatar: '/assets/avatars/avatar-anika-visser.png',
    text: "Hi! I'm Petr, and I'm looking to improve my Spanish. I love traveling and cooking. What about you?",
  }),
  makeNotification({
    author: 'Jack',
    createdAt: subHours(now, 3).getTime(),
    avatar: '/assets/avatars/avatar-cao-yu.png',
    text: "Hola! I'm Jack, and I'd love to practice my Portuguese. Do you like hiking and outdoor activities?",
  }),
  makeNotification({
    author: 'Lisa',
    createdAt: subHours(now, 5).getTime(),
    avatar: '/assets/avatars/avatar-cao-yu.png',
    text: "Hi, I'm Lisa. I'm trying to master German for my studies. Are you into technology?",
  }),
  makeNotification({
    author: 'Veronika',
    createdAt: subHours(now, 4).getTime(),
    avatar: '/assets/avatars/avatar-iulia-albu.png',
    text: "Bonjour! I'm Veronika. I want to get better at speaking French. Do you like art and culture?",
  }),
  makeNotification({
    author: 'Michael',
    createdAt: subHours(now, 3).getTime(),
    avatar: '/assets/avatars/avatar-fran-perez.png',
    text: "Hey there! I'm Michael and I'm trying to learn Italian for my upcoming trip to Rome. Are you a foodie too?",
  }),
  makeNotification({
    author: 'Bob',
    createdAt: subHours(now, 2).getTime(),
    avatar: '/assets/avatars/avatar-chinasa-neo.png',
    text: "Hello! My name is Bob. I'm a native Russian speaker and want to practice my English. Do you enjoy sports?",
  }),
  makeNotification({
    author: 'Alice',
    createdAt: subHours(now, 1).getTime(),
    avatar: '/assets/avatars/avatar-carson-darrin.png',
    text: "Hi! I'm Alice, and I'm looking to improve my Spanish. I love traveling and cooking. What about you?",
  }),
];
