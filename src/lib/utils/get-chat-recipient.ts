import { TChannelContact } from '@/lib/types/chat';
import { IUser } from '@/lib/types/user';

export const getRecipient = (
  participants: TChannelContact[],
  currentUser: IUser | null
): TChannelContact | undefined => {
  if (currentUser) {
    return participants.find((participant) => participant.id !== currentUser.id);
  }
};
