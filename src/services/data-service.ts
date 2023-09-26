import { AbstractDataGateway } from '@/services/data-gateways/interfaces';
import { TCountry, THobby, TLanguage } from '@/lib/types/info-data';

export class DataService {
  private _dataGateway: AbstractDataGateway;

  constructor(authGateway: AbstractDataGateway) {
    this._dataGateway = authGateway;
  }

  public getLanguages = (): Promise<TLanguage[]> => {
    return this._dataGateway.getLanguages();
  };

  public getHobbies = (): Promise<THobby[]> => {
    return this._dataGateway.getHobbies();
  };

  public getCountries = (): Promise<TCountry[]> => {
    return this._dataGateway.getCountries();
  };
}
