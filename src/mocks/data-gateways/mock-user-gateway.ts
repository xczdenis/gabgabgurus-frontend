import { TMemberResponse, TUserLanguageResponse } from '@/lib/types/backend';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { AbstractUserGateway } from '@/services/data-gateways/interfaces';
import { TMemberProfile, TUserProfile } from '@/lib/types/user';
import { TLanguage, TUserLanguagesType } from '@/lib/types/info-data';
import { TUpdateUserProfileRequest } from '@/services/data-gateways/interfaces/user-gateway';
import { hobbies } from '@/mocks/data/hobbies';
import { contacts } from '@/mocks/data/contacts';

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

const fakeUser: TMemberResponse = {
  id: 3,
  first_name: 'Petr',
  country: 'France',
  about_me: aboutMe,
  speaks: [russian3, french2, spanish1, italian0],
  learning: [english5, deutsch4, russian0],
  hobbies: [hobbies[0], hobbies[5], hobbies[2], hobbies[1], hobbies[3], hobbies[9]],
  avatar: '/assets/avatars/avatar.png',
  is_blocked: false,
};

export class MockUserGateway extends AbstractUserGateway {
  public async getUserProfile(): Promise<TUserProfile> {
    return convertKeysSnakeToCamel({ ...fakeUser, email: 'admin@admin.com' });
  }

  public async updateUserProfile(data: TUpdateUserProfileRequest): Promise<TUserProfile> {
    return convertKeysSnakeToCamel({ ...fakeUser, email: 'admin@admin.com' });
  }

  public async getMemberProfile(id: number): Promise<TMemberProfile> {
    return convertKeysSnakeToCamel({
      ...fakeUser,
      ...contacts[id],
    });
  }

  public async blockMember(id: number): Promise<void> {}

  public async unblockMember(id: number): Promise<void> {}

  public async updateLanguages(languageType: TUserLanguagesType, language: TLanguage, level: number): Promise<void> {}

  public async removeLanguage(languageType: TUserLanguagesType, language: TLanguage): Promise<void> {}
}
