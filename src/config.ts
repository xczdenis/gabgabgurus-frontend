import { TLogLevel } from '@/lib/types/common';
import { SWRConfiguration } from 'swr';

export const enum PaletteMode {
  Dark = 'dark',
  Light = 'light',
}

export const enum QueryParamLookups {
  GraterThan = 'gt',
  LessThan = 'lt',
  Exact = 'exact',
}

export const enum ChannelTypes {
  Private = 100,
  Group = 200,
  Solo = 300,
}

export const enum MessageStatuses {
  Created = 100,
  Sent = 200,
  Delivered = 300,
  Read = 400,
}

export const enum HttpStatuses {
  Unauthorized = 401,
  NoContent = 204,
}

export const enum CacheKeys {
  Languages = 'LANGUAGES',
  Countries = 'COUNTRIES',
  Hobbies = 'HOBBIES',
  Notifications = 'NOTIFICATIONS',
  UserProfile = 'USER_PROFILE',
  UserIAm = 'USER_IAM',
  OAuthSignIn = 'OAUTH_SIGN_IN',
  Channels = 'CHANNELS',
  LastActivityUpdater = 'LAST_ACTIVITY_UPDATER',
}

export const cmpInfo = {
  name: 'GabGabGurus',
};

export const paginationConfig = {
  defaultPageSize: 20,
  chatsPageSize: 20,
  messagesPageSize: 40,
  notificationsPageSize: 5,
  searchPageSize: 20,
};

export const baseSWRConfig: SWRConfiguration = {
  dedupingInterval: 1000,
  revalidateOnFocus: true,
  shouldRetryOnError: true,
  errorRetryCount: 5,
};

export const CACHE_TTL_FOR_STATIC_DATA_MS = 3 * 60 * 60 * 1000; // Three hours

export const USER_ONLINE_WINDOW_MINUTES = 3;
export const USER_ONLINE_WINDOW_SECONDS = USER_ONLINE_WINDOW_MINUTES * 60;
export const USER_ONLINE_WINDOW_MS = USER_ONLINE_WINDOW_SECONDS * 1000;

export const STORAGE_KEY_PREFIX = 'app';

export const DEFAULT_LOG_LEVEL: TLogLevel = 'info';
