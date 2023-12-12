import { MockUserGateway } from '@/mocks/data-gateways/mock-user-gateway';
import { MockAuthGateway } from './mock-auth-gateway';
import { MockChannelGateway } from './mock-channel-gateway';
import { MockNotifyGateway } from './mock-notify-gateway';
import { MockOAuthGateway } from './mock-oauth-gateway';
import { MockRefsGateway } from './mock-refs-gateway';

export const mockAuthGateway = new MockAuthGateway();
export const mockChannelGateway = new MockChannelGateway();
export const mockNotifyGateway = new MockNotifyGateway();
export const mockOAuthGateway = new MockOAuthGateway();
export const mockRefsGateway = new MockRefsGateway();
export const mockUserGateway = new MockUserGateway();
