import { urls } from '@/urls';
import { TFooterSectionsItem } from './types';

export const sections: TFooterSectionsItem[] = [
  {
    title: 'Menu',
    items: [
      {
        title: 'Search language partners',
        path: urls.search,
        auth: false,
      },
    ],
  },
  {
    title: 'Account',
    items: [
      {
        title: 'My profile',
        path: urls.profile,
        auth: true,
      },
      {
        title: 'My messages',
        path: urls.chats.list,
        auth: true,
      },
    ],
  },
];
