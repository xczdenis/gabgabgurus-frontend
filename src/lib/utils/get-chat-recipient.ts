import { TChatContact } from '@/lib/types/chat';
import { IUser } from '@/lib/types/user';

export const getRecipient = (participants: TChatContact[], currentUser: IUser | null): TChatContact | undefined => {
  console.log('getRecipient');
  if (currentUser) {
    return participants.find((participant) => participant.id !== currentUser.id);
  }
};
