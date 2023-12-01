import { TPageNumberPaginationParams } from '@/lib/types/pagination';
import { TCountry, THobby, TLanguage, TLanguageLevel } from '@/lib/types/refs';
import { IUser, TMemberPagination, TMemberProfile, TUserLanguage, TUserProfile } from '@/lib/types/user';
import { AbstractBaseGateway } from './base-gateway';

export type TSearchRequest = {
  learning?: string;
  speaks?: string;
  countries?: string;
  hobbies?: string;
  top?: number;
} & TPageNumberPaginationParams;

export type TUpdateUserProfileRequest = {
  firstName?: string;
  aboutMe?: string;
  country?: TCountry;
  hobbies?: THobby[];
};

export type TUserLanguageRequest = {
  language: TLanguage;
  languageLevel?: TLanguageLevel;
  isSpeaking?: boolean;
  isLearning?: boolean;
};

export abstract class AbstractUserGateway extends AbstractBaseGateway {
  public abstract iam(): Promise<IUser>;
  public abstract searchMembers(params?: TSearchRequest): Promise<TMemberPagination>;
  public abstract getTopMembers(): Promise<TMemberProfile[]>;
  public abstract getUserProfile(): Promise<TUserProfile>;
  public abstract updateUserProfile(data: TUpdateUserProfileRequest): Promise<TUserProfile>;
  public abstract updateUserLanguage(data: TUserLanguageRequest): Promise<TUserLanguage>;
  public abstract updateAvatar(body: FormData): Promise<void>;
  public abstract deleteAvatar(): Promise<void>;
  public abstract getMemberProfile(id: number): Promise<TMemberProfile>;
  public abstract blockMember(id: number): Promise<void>;
  public abstract unblockMember(id: number): Promise<void>;
  public abstract updateLastActivity(): Promise<void>;
}
