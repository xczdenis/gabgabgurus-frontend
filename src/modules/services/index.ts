import { mockWsClient } from '@/mocks/clients';
import {
  mockAuthGateway,
  mockChannelGateway,
  mockNotifyGateway,
  mockOAuthGateway,
  mockRefsGateway,
  mockUserGateway,
} from '@/mocks/data-gateways';
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
import { kyChatGateway, kyNotifyGateway, kyOAuthGateway, kyRefsGateway, kyUserGateway } from '../data-gateways';

const gateways = {
  authGateway: mockAuthGateway,
  chatGateway: kyChatGateway,
  notifyGateway: kyNotifyGateway,
  oAuthGateway: kyOAuthGateway,
  refsGateway: kyRefsGateway,
  userGateway: kyUserGateway,
};

const wsClients = {
  clientForChannelService: wsClient,
  clientForNotifyService: wsClient,
};

if (process.env.NODE_ENV == 'development') {
  if (process.env.NEXT_PUBLIC_MOCK_CHANNEL_SERVICE === '1') {
    gateways.chatGateway = mockChannelGateway as unknown as typeof kyChatGateway;
  }
  if (process.env.NEXT_PUBLIC_MOCK_NOTIFY_SERVICE === '1') {
    gateways.notifyGateway = mockNotifyGateway as unknown as typeof kyNotifyGateway;
  }
  if (process.env.NEXT_PUBLIC_MOCK_OAUTH_SERVICE === '1') {
    gateways.oAuthGateway = mockOAuthGateway as unknown as typeof kyOAuthGateway;
  }
  if (process.env.NEXT_PUBLIC_MOCK_REFS_SERVICE === '1') {
    gateways.refsGateway = mockRefsGateway as unknown as typeof kyRefsGateway;
  }
  if (process.env.NEXT_PUBLIC_MOCK_USER_SERVICE === '1') {
    gateways.userGateway = mockUserGateway as unknown as typeof kyUserGateway;
  }

  if (process.env.NEXT_PUBLIC_MOCK_CHANNEL_WS_SERVICE === '1') {
    wsClients.clientForChannelService = mockWsClient;
  }
  if (process.env.NEXT_PUBLIC_MOCK_NOTIFY_WS_SERVICE === '1') {
    wsClients.clientForNotifyService = mockWsClient;
  }
}

export const authService = new AuthService(gateways.authGateway);
export const chatService = new ChannelService(gateways.chatGateway);
export const refsService = new RefsService(gateways.refsGateway);
export const notifyService = new NotifyService(gateways.notifyGateway);
export const oAuthService = new OAuthService(gateways.oAuthGateway);
export const userService = new UserService(gateways.userGateway);
export const localStorageService = new LocalStorageService();

export const chatWsService = new ChannelWsService(wsClients.clientForChannelService);
export const notifyWsService = new NotifyWsService(wsClients.clientForNotifyService);
