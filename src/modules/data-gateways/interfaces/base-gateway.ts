import { convertKeysCamelToSnake } from '@/lib/utils/convert-keys-camel-to-snake';
import { joinPaths } from '@/lib/utils/join-paths';
import { objectToQueryParams } from '@/lib/utils/object-to-query-params';

export abstract class AbstractBaseGateway {
  protected readonly _urlNamespace: string;

  protected constructor(urlNamespace: string = '') {
    this._urlNamespace = urlNamespace;
  }

  protected _buildUrl(
    path: string = '',
    queryParams?: Record<string, unknown>,
    convertKeysToSnake: boolean = true
  ): string {
    let url = `${this._urlNamespace}/`;
    let queryParamsString = '';

    if (queryParams) {
      const convertedQueryParams = convertKeysToSnake ? convertKeysCamelToSnake(queryParams) : queryParams;
      queryParamsString = objectToQueryParams(convertedQueryParams);
      queryParamsString = queryParamsString ? `?${queryParamsString}` : '';
    }

    url = joinPaths(url, path);
    url = joinPaths(url, queryParamsString);

    return url;
  }
}
