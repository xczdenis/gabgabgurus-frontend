import { TDefaultId } from '@/lib/types/common';
import { TPagePagination } from '@/lib/types/pagination';
import { TLanguage, TLanguageLevel } from '@/lib/types/refs';

export type TBaseUserResponse = {
  id: TDefaultId;
  first_name: string;
  email: string;
  avatar: string;
};

export type TUserLanguageResponse = {
  language: TLanguage;
  language_level: TLanguageLevel;
  is_speaking: boolean;
  is_learning: boolean;
};

export type TSignInResponse = {
  user: TBaseUserResponse;
};

export type TMemberProfileResponse = {
  id: TDefaultId;
  first_name: string;
  country: string;
  about_me: string;
  speaks: TUserLanguageResponse[];
  learning: TUserLanguageResponse[];
  hobbies: string[];
  avatar: string;
  is_blocked: boolean;
  blocked_for: boolean;
  last_activity: number;
};

export type TMemberPaginationResponse = TPagePagination<TMemberProfileResponse>;
