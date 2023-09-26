import { TChatContact } from '@/lib/types/chat';

const now = new Date();

export const useMockedUser = (): TChatContact => {
  return {
    id: 1,
    avatar: '/assets/avatars/avatar-alcides-antonio.png',
    firstName: 'Denis Petrov',
    isActive: true,
    lastActivity: now.getTime(),
    isBlocked: false,
  };
};
