import { TCountry, THobby, TLanguage } from '@/lib/types/refs';
import { TCountriesResponse, THobbiesResponse, TLanguagesResponse } from '@/lib/types/refs-response';
import { KyClient } from '@/modules/clients/ky-client';
import { AbstractRefsGateway } from '@/modules/data-gateways/interfaces';

export class KyRefsGateway extends AbstractRefsGateway {
  private readonly _apiClient: KyClient;

  constructor(kyClient: KyClient) {
    super('refs');
    this._apiClient = kyClient;
  }

  public async getLanguages(): Promise<TLanguage[]> {
    return this._getRefs<TLanguagesResponse>('languages');
  }

  public async getHobbies(): Promise<THobby[]> {
    return this._getRefs<THobbiesResponse>('hobbies');
  }

  public async getCountries(): Promise<TCountry[]> {
    return this._getRefs<TCountriesResponse>('countries');
  }

  private async _getRefs<T extends { name: string }[]>(urlPath: string): Promise<string[]> {
    const url = this._buildUrl(urlPath);
    const response = await this._apiClient.request<T>('get', url);
    return response.map(({ name }) => name);
  }
}
