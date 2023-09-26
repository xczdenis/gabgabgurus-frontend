import {
  mockAuthGateway,
  mockChatGateway,
  mockDataGateway,
  mockNotifyGateway,
  mockSearchGateway,
  mockUserGateway,
} from './data-gateways';
import { AuthService } from '@/services/auth-service';
import { ChatService } from '@/services/chat-service';
import { DataService } from '@/services/data-service';
import { LocalStorageService } from '@/services/local-storage-service';
import { SearchService } from '@/services/search-service';
import { UserService } from '@/services/user-service';
import { NotifyService } from '@/services/notify-service';

const isDevelopment = process.env.NODE_ENV === 'development';

const authGateway = isDevelopment ? mockAuthGateway : mockAuthGateway;
const chatGateway = isDevelopment ? mockChatGateway : mockChatGateway;
const dataGateway = isDevelopment ? mockDataGateway : mockDataGateway;
const notifyGateway = isDevelopment ? mockNotifyGateway : mockNotifyGateway;
const searchGateway = isDevelopment ? mockSearchGateway : mockSearchGateway;
const userGateway = isDevelopment ? mockUserGateway : mockUserGateway;

export const authService = new AuthService(authGateway);
export const chatService = new ChatService(chatGateway);
export const dataService = new DataService(dataGateway);
export const notifyService = new NotifyService(notifyGateway);
export const searchService = new SearchService(searchGateway);
export const userService = new UserService(userGateway);

export const localStorageService = new LocalStorageService();
