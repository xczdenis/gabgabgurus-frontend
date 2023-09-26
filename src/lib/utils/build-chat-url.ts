import { TChatContact } from '@/lib/types/chat';
import { buildUrl } from '@/lib/utils/build-url';
import { urls } from '@/urls';

export const buildChatUrl = (member: TChatContact | undefined): string => {
  if (member) {
    return buildUrl(urls.chats.personal, { path: { memberId: member.id } });
  }
  return '';
};
