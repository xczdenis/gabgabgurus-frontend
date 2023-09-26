import {
  MockAuthGateway,
  MockChatGateway,
  MockDataGateway,
  MockNotifyGateway,
  MockSearchGateway,
  MockUserGateway,
} from '@/mocks/data-gateways';
import { KyAuthGateway } from '@/services/data-gateways/http';
import { KyClient } from '../clients';

const kyClient = new KyClient();

export const kyAuthGateway = new KyAuthGateway(kyClient);
// export const kyUserGateway = new KyUserGateway(kyClient);

export const mockAuthGateway = new MockAuthGateway();
export const mockChatGateway = new MockChatGateway();
export const mockNotifyGateway = new MockNotifyGateway();
export const mockDataGateway = new MockDataGateway();
export const mockSearchGateway = new MockSearchGateway();
export const mockUserGateway = new MockUserGateway();
