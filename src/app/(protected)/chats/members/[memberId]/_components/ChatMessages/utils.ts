import { TAuthor } from './types';
import { TChatContact, TChatMessage } from '@/lib/types/chat';
import { IUser } from '@/lib/types/user';

export const getAuthor = (message: TChatMessage, participants: TChatContact[], user: IUser): TAuthor => {
  const participant = participants.find((participant) => participant.id === message.authorId);

  if (!participant) {
    return {
      name: 'Unknown',
      avatar: '',
      isUser: false,
    };
  }

  if (message.authorId === user.id) {
    return {
      name: 'Me',
      avatar: user.avatar,
      isUser: true,
    };
  }

  return {
    avatar: participant.avatar,
    name: participant.firstName,
    isUser: false,
  };
};
