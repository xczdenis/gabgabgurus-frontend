import { AbstractSearchGateway } from '@/services/data-gateways/interfaces';
import { TMemberPagination, TMemberProfile } from '@/lib/types/user';
import { TSearchRequest } from '@/services/data-gateways/interfaces/search-gateway';
import { paginationConfig } from '@/config';
import { deepStringifyValues } from '@/lib/utils/deep-stringify-values';

export class SearchService {
  private _searchGateway: AbstractSearchGateway;

  constructor(searchGateway: AbstractSearchGateway) {
    this._searchGateway = searchGateway;
  }

  public async search(params?: TSearchRequest): Promise<TMemberPagination> {
    const defaultPaginationParams = {
      page: 1,
      count: paginationConfig.usersOnSearchPageCount,
    };
    const mergedParams = {
      ...deepStringifyValues(defaultPaginationParams),
      ...params,
    };
    return this._searchGateway.search(mergedParams);
  }

  public async getTopMembers(): Promise<TMemberProfile[]> {
    return this._searchGateway.getTopMembers();
  }
}
