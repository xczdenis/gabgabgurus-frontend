import { TMemberProfile, TUserProfile } from '@/lib/types/user';
import { THobby, TLanguage, TUserLanguagesType } from '@/lib/types/info-data';

export type TUpdateUserProfileRequest = {
  firstName: string;
  aboutMe: string;
  hobbies: THobby[];
};

export abstract class AbstractUserGateway {
  public abstract getUserProfile(): Promise<TUserProfile>;
  public abstract updateUserProfile(data: TUpdateUserProfileRequest): Promise<TUserProfile>;
  public abstract getMemberProfile(id: number): Promise<TMemberProfile>;
  public abstract blockMember(id: number): Promise<void>;
  public abstract unblockMember(id: number): Promise<void>;
  public abstract updateLanguages(languagesType: TUserLanguagesType, language: TLanguage, level: number): Promise<void>;
  public abstract removeLanguage(languagesType: TUserLanguagesType, language: TLanguage): Promise<void>;
}
