import { wsClient } from '@/modules/clients';

import { AuthService } from '@/modules/services/auth-service';
import { ChannelService } from '@/modules/services/channel-service';
import { ChannelWsService } from '@/modules/services/channel-ws-service';
import { LocalStorageService } from '@/modules/services/local-storage-service';
import { NotifyService } from '@/modules/services/notify-service';
import { NotifyWsService } from '@/modules/services/notify-ws-service';
import { OAuthService } from '@/modules/services/oauth-service';
import { RefsService } from '@/modules/services/refs-service';
import { UserService } from '@/modules/services/user-service';
import {
  kyChatGateway,
  kyNotifyGateway,
  kyOAuthGateway,
  kyRefsGateway,
  kyUserGateway,
  mockAuthGateway,
} from '../data-gateways';

const gateways = {
  authGateway: mockAuthGateway,
  chatGateway: kyChatGateway,
  refsGateway: kyRefsGateway,
  notifyGateway: kyNotifyGateway,
  oAuthGateway: kyOAuthGateway,
  userGateway: kyUserGateway,
};

export const authService = new AuthService(gateways.authGateway);
export const chatService = new ChannelService(gateways.chatGateway);
export const refsService = new RefsService(gateways.refsGateway);
export const notifyService = new NotifyService(gateways.notifyGateway);
export const oAuthService = new OAuthService(gateways.oAuthGateway);
export const userService = new UserService(gateways.userGateway);
export const localStorageService = new LocalStorageService();

export const chatWsService = new ChannelWsService(wsClient);
export const notifyWsService = new NotifyWsService(wsClient);
