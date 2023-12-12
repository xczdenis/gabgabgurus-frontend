import { paginationConfig } from '@/config';
import { TDefaultId } from '@/lib/types/common';
import { IUser, TMemberPagination, TMemberProfile, TUserLanguage, TUserProfile } from '@/lib/types/user';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';
import { memberProfiles, mockProfileAdmin } from '@/mocks/data/member-profiles';
import { mockAdmin } from '@/mocks/data/users';
import { AbstractUserGateway } from '@/modules/data-gateways/interfaces';
import {
  TSearchRequest,
  TUpdateUserProfileRequest,
  TUserLanguageRequest,
} from '@/modules/data-gateways/interfaces/user-gateway';

export class MockUserGateway extends AbstractUserGateway {
  constructor() {
    super();
  }

  public async iam(): Promise<IUser> {
    return mockAdmin;
  }

  public async searchMembers(params?: TSearchRequest): Promise<TMemberPagination> {
    let page = 1;
    let count = paginationConfig.searchPageSize;
    if (params) {
      page = params.page ? parseInt(String(params.page)) : page;
      count = params.count ? parseInt(String(params.count)) : count;
    }

    const allData = memberProfiles;
    const pages = Math.ceil(allData.length / count);
    const start = (page - 1) * count;
    const end = start + count;

    const next = page < pages ? String(page + 1) : null;
    const prev = page > 1 ? String(page - 1) : null;
    const current = page;

    const response = {
      count: allData.length,
      next,
      previous: prev,
      current,
      pages,
      results: allData.slice(start, end),
    };

    return convertKeysSnakeToCamel(response);
  }

  public async getTopMembers(): Promise<TMemberProfile[]> {
    return convertKeysSnakeToCamel([memberProfiles[2], memberProfiles[1], memberProfiles[7]]);
  }

  public async getUserProfile(): Promise<TUserProfile> {
    return mockProfileAdmin;
  }

  public async updateUserProfile(data: TUpdateUserProfileRequest): Promise<TUserProfile> {
    return { ...mockProfileAdmin, ...data };
  }

  public async updateUserLanguage(data: TUserLanguageRequest): Promise<TUserLanguage> {
    return { language: data.language, languageLevel: data.languageLevel ?? 0 };
  }

  public async updateAvatar(): Promise<void> {
    Promise.resolve(undefined);
  }

  public async deleteAvatar(): Promise<void> {
    Promise.resolve(undefined);
  }

  public async getMemberProfile(id: TDefaultId): Promise<TMemberProfile> {
    const profile = memberProfiles.find((p) => p.id === id);
    return convertKeysSnakeToCamel(profile ?? memberProfiles[id - 1]);
  }

  public async blockMember(): Promise<void> {
    Promise.resolve(undefined);
  }

  public async unblockMember(): Promise<void> {
    Promise.resolve(undefined);
  }

  public async updateLastActivity(): Promise<void> {
    Promise.resolve(undefined);
  }
}
