// import { TLanguage, TUserLanguageType } from '@/lib/types/refs';
// import { TMemberProfile, TUserLanguage, TUserProfile } from '@/lib/types/user';
// import { TMemberProfileResponse, TUserLanguageResponse } from '@/lib/types/user-response';
// import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
// import { contacts } from '@/mocks/data/contacts';
// import { hobbies } from '@/mocks/data/hobbies';
// import { AbstractUserGateway } from '@/modules/data-gateways/interfaces';
// import { TUpdateUserProfileRequest, TUserLanguageRequest } from '@/modules/data-gateways/interfaces/user-gateway';
//
// const aboutMe: string = `Hey there! I'm Mike from sunny LA. By day, I work in digital marketing and by night, I'm a language enthusiast—currently all about learning Russian. Maybe it's the influence of Dostoevsky novels or my love for Russian cuisine (hello, borscht!), but I'm hooked!
// I'm fluent in English (it's my native language) and would love to help someone get their English skills up to par. In return, I'd appreciate some casual Russian conversations. Don't worry, I can already say more than just "Da" and "Nyet"! 😄
// Big fan of indie music, hiking, and of course, hitting the beaches here in LA. So if you're up for some English chit-chat and can help me not sound like a total newbie in Russian, hit me up! Let's make language learning fun and effortless.
// Cheers!
// `;
//
// const english5: TUserLanguageResponse = { language: 'English', language_level: 5 };
// const deutsch4: TUserLanguageResponse = { language: 'Deutsch', language_level: 4 };
// const russian3: TUserLanguageResponse = { language: 'Russian', language_level: 3 };
// const russian0: TUserLanguageResponse = { language: 'Russian', language_level: 0 };
// const spanish1: TUserLanguageResponse = { language: 'Spanish', language_level: 1 };
// const italian0: TUserLanguageResponse = { language: 'Italian', language_level: 0 };
// const french2: TUserLanguageResponse = { language: 'French', language_level: 2 };
//
// const fakeUser: TMemberProfileResponse = {
//   id: 3,
//   first_name: 'Petr',
//   country: 'France',
//   about_me: aboutMe,
//   speaks: [russian3, french2, spanish1, italian0],
//   learning: [english5, deutsch4, russian0],
//   hobbies: [hobbies[0], hobbies[5], hobbies[2], hobbies[1], hobbies[3], hobbies[9]],
//   avatar: '/assets/avatars/avatar01.png',
//   is_blocked: false,
// };
//
// export class MockUserGateway extends AbstractUserGateway {
//   constructor() {
//     super();
//   }
//   public async getUserProfile(): Promise<TUserProfile> {
//     return convertKeysSnakeToCamel({ ...fakeUser, email: 'admin@admin.com' });
//   }
//
//   public async updateUserProfile(data: TUpdateUserProfileRequest): Promise<TUserProfile> {
//     return convertKeysSnakeToCamel({ ...fakeUser, email: 'admin@admin.com' });
//   }
//
//   public async updateUserLanguage(data: TUserLanguageRequest): Promise<TUserLanguage> {
//     return convertKeysSnakeToCamel(data);
//   }
//
//   public async getMemberProfile(id: number): Promise<TMemberProfile> {
//     return convertKeysSnakeToCamel({
//       ...fakeUser,
//       ...contacts[id],
//     });
//   }
//
//   public async blockMember(id: number): Promise<void> {}
//
//   public async unblockMember(id: number): Promise<void> {}
//
//   public async deleteUserLanguage(languageType: TUserLanguageType, language: TLanguage): Promise<void> {}
// }
