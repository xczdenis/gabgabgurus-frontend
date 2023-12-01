import { TCountry, THobby, TLanguage } from '@/lib/types/refs';
import { AbstractRefsGateway } from '@/modules/data-gateways/interfaces';

export class RefsService {
  private _dataGateway: AbstractRefsGateway;

  constructor(authGateway: AbstractRefsGateway) {
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
