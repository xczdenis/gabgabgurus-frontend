import { TDefaultId } from '@/lib/types/common';
import { chatWsService } from '@/modules/services';

export const sendChannelMessage = (channelId: TDefaultId | null, text: string) => {
  if (channelId) {
    chatWsService.sendChannelMessage({ channelId, text });
  }
};
