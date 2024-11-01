import { paginationConfig } from '@/config';
import { TDefaultId } from '@/lib/types/common';
import { IUser, TMemberPagination, TMemberProfile, TUserLanguage, TUserProfile } from '@/lib/types/user';
import { AbstractUserGateway } from '@/modules/data-gateways/interfaces';
import {
  TSearchRequest,
  TSendFeedbackRequest,
  TUpdateUserProfileRequest,
  TUserLanguageRequest,
} from '@/modules/data-gateways/interfaces/user-gateway';

export class UserService {
  private _userGateway: AbstractUserGateway;

  constructor(userGateway: AbstractUserGateway) {
    this._userGateway = userGateway;
  }

  public async iam(): Promise<IUser> {
    return this._userGateway.iam();
  }

  public searchMembers = (params?: TSearchRequest): Promise<TMemberPagination> => {
    const defaultPaginationParams = {
      page: 1,
      count: paginationConfig.searchPageSize,
    };
    const mergedParams = {
      ...defaultPaginationParams,
      ...params,
    };
    return this._userGateway.searchMembers(mergedParams);
  };

  public getTopMembers = (): Promise<TMemberProfile[]> => {
    return this._userGateway.getTopMembers();
  };

  public getUserProfile = (): Promise<TUserProfile> => {
    return this._userGateway.getUserProfile();
  };

  public updateUserProfile = (data: TUpdateUserProfileRequest): Promise<TUserProfile> => {
    return this._userGateway.updateUserProfile(data);
  };

  public updateUserLanguage = (data: TUserLanguageRequest): Promise<TUserLanguage> => {
    return this._userGateway.updateUserLanguage(data);
  };

  public updateAvatar = (body: FormData): Promise<void> => {
    return this._userGateway.updateAvatar(body);
  };

  public deleteAvatar = (): Promise<void> => {
    return this._userGateway.deleteAvatar();
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

  public updateLastActivity = (): Promise<void> => {
    return this._userGateway.updateLastActivity();
  };

  public sendFeedback = (data: TSendFeedbackRequest): Promise<void> => {
    return this._userGateway.sendFeedback(data);
  };
}
