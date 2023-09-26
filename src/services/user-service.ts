import { AbstractUserGateway } from '@/services/data-gateways/interfaces';
import { TMemberProfile, TUserProfile } from '@/lib/types/user';
import { TDefaultId } from '@/lib/types/common';
import { TUpdateUserProfileRequest } from '@/services/data-gateways/interfaces/user-gateway';
import { TUserLanguagesType } from '@/lib/types/info-data';

export class UserService {
  private _userGateway: AbstractUserGateway;

  constructor(userGateway: AbstractUserGateway) {
    this._userGateway = userGateway;
  }

  public getUserProfile = (): Promise<TUserProfile> => {
    return this._userGateway.getUserProfile();
  };

  public updateUserProfile = (data: TUpdateUserProfileRequest): Promise<TUserProfile> => {
    return this._userGateway.updateUserProfile(data);
  };

  public getMemberProfile = (id: TDefaultId): Promise<TMemberProfile> => {
    return this._userGateway.getMemberProfile(id);
  };

  public blockMember = (id: TDefaultId): Promise<void> => {
    return this._userGateway.blockMember(id);
  };

  public unblockMember = (id: TDefaultId): Promise<void> => {
    return this._userGateway.unblockMember(id);
  };

  public updateLanguages = (languagesType: TUserLanguagesType, language: string, level: number): Promise<void> => {
    return this._userGateway.updateLanguages(languagesType, language, level);
  };

  public removeLanguage = (languageType: TUserLanguagesType, language: string): Promise<void> => {
    return this._userGateway.removeLanguage(languageType, language);
  };
}
