import { TDefaultId } from '@/lib/types/common';
import { TPagePagination } from '@/lib/types/pagination';
import { THobby, TLanguage, TLanguageLevel } from '@/lib/types/refs';

export interface IUser {
  id: TDefaultId;
  firstName: string;
  email: string;
  avatar: string;
}

export type TUserLanguage = {
  language: TLanguage;
  languageLevel: TLanguageLevel;
};

export type TUserProfile = {
  id: TDefaultId;
  firstName: string;
  email: string;
  country: string;
  avatar: string;
  aboutMe: string;
  hobbies: THobby[];
  speaks: TUserLanguage[];
  learning: TUserLanguage[];
};

export type TMemberProfile = {
  id: TDefaultId;
  firstName: string;
  country: string;
  aboutMe: string;
  speaks: TUserLanguage[];
  learning: TUserLanguage[];
  hobbies: string[];
  avatar: string;
  isBlocked: boolean;
  blockedFor: boolean;
  lastActivity: number;
};

export type TMemberPagination = TPagePagination<TMemberProfile>;
