export const enum PaletteMode {
  Dark = 'dark',
  Light = 'light',
}

export const cmpInfo = {
  name: 'GabGabGurus',
};

export const paginationConfig = {
  defaultCount: 20,
  chatsCount: 5,
  usersOnSearchPageCount: 20,
  messagesCount: 2,
};

export const enum CacheKeys {
  Languages = 'LANGUAGES',
  Countries = 'COUNTRIES',
  Notifications = 'NOTIFICATIONS',
}

export const CACHE_TTL_FOR_STATIC_DATA_MS = 3 * 60 * 60 * 1000; // Three hours
