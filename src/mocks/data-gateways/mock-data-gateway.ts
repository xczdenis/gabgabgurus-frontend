import { AbstractDataGateway } from '@/services/data-gateways/interfaces';
import { TCountry, THobby, TLanguage } from '@/lib/types/info-data';
import { languages } from '@/mocks/data/languages';
import { hobbies } from '@/mocks/data/hobbies';
import { countries } from '@/mocks/data/countries';

export class MockDataGateway extends AbstractDataGateway {
  public async getLanguages(): Promise<TLanguage[]> {
    return languages;
  }

  public async getHobbies(): Promise<THobby[]> {
    return hobbies;
  }

  public async getCountries(): Promise<TCountry[]> {
    return countries;
  }
}
