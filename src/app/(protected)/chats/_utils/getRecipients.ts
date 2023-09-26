import { TChatContact } from '@/lib/types/chat';
import { TDefaultId } from '@/lib/types/common';

export const getRecipients = (participants: TChatContact[], userId: TDefaultId | undefined): TChatContact[] => {
  return participants?.filter((participant) => participant.id !== userId) || [];
};
