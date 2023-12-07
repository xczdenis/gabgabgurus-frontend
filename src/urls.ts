export const urls = {
  index: '/',
  auth: {
    signup: '/signup',
    signin: '/signin',
  },
  oauth: {
    redirectUrl: '/oauth/login',
  },
  profile: '/profile',
  search: '/search',
  users: {
    detail: '/users/:id',
  },
  chats: {
    list: '/messages',
    private: '/messages/members/:memberId',
  },
  github: {
    frontend: 'https://github.com/xczdenis/gabgabgurus-frontend',
    backend: 'https://github.com/xczdenis/gabgabgurus-backend',
  },
  401: '/401',
  404: '/404',
  500: '/500',
};
