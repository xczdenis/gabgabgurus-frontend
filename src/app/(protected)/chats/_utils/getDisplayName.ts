import { TChatContact } from '@/lib/types/chat';

export const getDisplayName = (recipients: TChatContact[]): string => {
  const displayName = recipients
    .slice(0, 10)
    .map((recipient) => recipient.firstName)
    .join(', ');
  return displayName.length > 70 ? displayName.substring(0, 70) + '...' : displayName;
};
