/* eslint-disable @typescript-eslint/naming-convention */

import { TDefaultId } from '@/lib/types/common';
import { TChatContact } from '@/lib/types/chat';

type TPaginationResponse<T> = {
  count: number;
  next: number | null;
  prev: number | null;
  current: number;
  results: T[];
};

export type TBaseUserResponse = {
  id: TDefaultId;
  email: string;
  first_name: string;
  avatar: string;
};

export type TUserProfileResponse = {
  id: TDefaultId;
  first_name: string;
  country: string;
  about_me: string;
  speaks: TUserLanguageResponse[];
  learning: TUserLanguageResponse[];
  hobbies: string[];
  avatar: string;
};

export type TSignInResponse = {
  user: TBaseUserResponse;
};

export type TUserLanguageResponse = {
  name: string;
  level: number;
};

export type TMemberResponse = {
  id: TDefaultId;
  first_name: string;
  country: string;
  about_me: string;
  speaks: TUserLanguageResponse[];
  learning: TUserLanguageResponse[];
  hobbies: string[];
  avatar: string;
  is_blocked: boolean;
};

export type TChatResponse = {
  id: TDefaultId;
  participants: TChatContact[];
  unread_count: number;
  last_activity: number;
};

/* eslint-enable @typescript-eslint/naming-convention */
