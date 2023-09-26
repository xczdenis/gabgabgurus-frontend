import { TMemberResponse, TUserLanguageResponse } from '@/lib/types/backend';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { AbstractSearchGateway } from '@/services/data-gateways/interfaces';
import { TMemberPagination, TMemberProfile } from '@/lib/types/user';
import { TSearchRequest } from '@/services/data-gateways/interfaces/search-gateway';
import { paginationConfig } from '@/config';
import { hobbies } from '@/mocks/data/hobbies';

const aboutMe: string = `Hey there! I'm Mike from sunny LA. By day, I work in digital marketing and by night, I'm a language enthusiast—currently all about learning Russian. Maybe it's the influence of Dostoevsky novels or my love for Russian cuisine (hello, borscht!), but I'm hooked!
I'm fluent in English (it's my native language) and would love to help someone get their English skills up to par. In return, I'd appreciate some casual Russian conversations. Don't worry, I can already say more than just "Da" and "Nyet"! 😄
Big fan of indie music, hiking, and of course, hitting the beaches here in LA. So if you're up for some English chit-chat and can help me not sound like a total newbie in Russian, hit me up! Let's make language learning fun and effortless.
Cheers!
`;

const english5: TUserLanguageResponse = { name: 'English', level: 5 };
const deutsch4: TUserLanguageResponse = { name: 'Deutsch', level: 4 };
const russian3: TUserLanguageResponse = { name: 'Russian', level: 3 };
const russian0: TUserLanguageResponse = { name: 'Russian', level: 0 };
const spanish1: TUserLanguageResponse = { name: 'Spanish', level: 1 };
const italian0: TUserLanguageResponse = { name: 'Italian', level: 0 };
const french2: TUserLanguageResponse = { name: 'French', level: 2 };

const partner1: TMemberResponse = {
  id: 1,
  first_name: 'Denis',
  country: 'Russia',
  about_me: aboutMe,
  speaks: [english5, deutsch4, russian3, french2, spanish1, italian0],
  learning: [russian3, italian0],
  hobbies: [hobbies[0], hobbies[1], hobbies[3], hobbies[2]],
  avatar: '/assets/avatars/avatar-neha-punita.png',
  is_blocked: true,
};
const partner2: TMemberResponse = {
  id: 2,
  first_name: 'Ivan',
  country: 'USA',
  about_me: aboutMe,
  speaks: [english5, deutsch4],
  learning: [russian0],
  hobbies: [hobbies[5], hobbies[6], hobbies[7], hobbies[8]],
  avatar: '/assets/avatars/avatar-nasimiyu-danai.png',
  is_blocked: false,
};
const partner3: TMemberResponse = {
  id: 3,
  first_name: 'Petr',
  country: 'France',
  about_me: aboutMe,
  speaks: [russian3, french2, spanish1, italian0],
  learning: [english5, deutsch4],
  hobbies: [hobbies[1], hobbies[2], hobbies[3], hobbies[8]],
  avatar: '/assets/avatars/avatar-seo-hyeon-ji.png',
  is_blocked: true,
};

export class MockSearchGateway extends AbstractSearchGateway {
  public async search(params?: TSearchRequest): Promise<TMemberPagination> {
    let page = 1;
    let count = paginationConfig.usersOnSearchPageCount;
    if (params) {
      page = parseInt(String(params.page));
      count = parseInt(String(params.count));
    }
    const data = [partner1, partner2, partner3];

    const totalPages = Math.ceil(data.length / count);
    const start = (page - 1) * count;
    const end = start + count;

    const next = page < totalPages ? page + 1 : null;
    const prev = page > 1 ? page - 1 : null;
    const current = page;

    const response = {
      count: totalPages,
      next,
      prev,
      current,
      results: data.slice(start, end),
    };

    return convertKeysSnakeToCamel(response);
  }

  public async getTopMembers(): Promise<TMemberProfile[]> {
    const data = [partner1, partner2, partner3];
    return convertKeysSnakeToCamel(data);
  }
}
