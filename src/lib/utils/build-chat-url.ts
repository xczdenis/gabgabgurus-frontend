import { TDefaultId } from '@/lib/types/common';
import { buildUrl } from '@/lib/utils/build-url';
import { urls } from '@/urls';

export const buildChatUrl = (memberId: TDefaultId | undefined): string => {
  if (memberId) {
    return buildUrl(urls.chats.private, { path: { memberId } });
  }
  return '';
};
