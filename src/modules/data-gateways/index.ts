import { MockAuthGateway } from '@/mocks/data-gateways';
import { kyClient } from '@/modules/clients';
import { KyChatGateway, KyNotifyGateway, KyOAuthGateway, KyRefsGateway } from '@/modules/data-gateways/ky';
import { KyUserGateway } from '@/modules/data-gateways/ky/ky-user-gateway';

export const kyChatGateway = new KyChatGateway(kyClient);
export const kyNotifyGateway = new KyNotifyGateway(kyClient);
export const kyOAuthGateway = new KyOAuthGateway(kyClient);
export const kyRefsGateway = new KyRefsGateway(kyClient);
export const kyUserGateway = new KyUserGateway(kyClient);

export const mockAuthGateway = new MockAuthGateway();
// export const mockChatGateway = new MockChatGateway();
// export const mockDataGateway = new MockRefsGateway();
// export const mockNotifyGateway = new MockNotifyGateway();
// export const mockUserGateway = new MockUserGateway();
