import { TDefaultId } from '@/lib/types/common';
import { THobby } from '@/lib/types/info-data';
import { TPaginationData } from '@/lib/types/pagination';

export type TUserLanguage = {
  name: string;
  level: number;
};

export interface IUser {
  id: TDefaultId;
  firstName: string;
  email: string;
  avatar: string;
}

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
};

export type TMemberPagination = TPaginationData<TMemberProfile>;
