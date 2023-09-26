import { TCountry, THobby, TLanguage } from '@/lib/types/info-data';

export abstract class AbstractDataGateway {
  public abstract getLanguages(): Promise<TLanguage[]>;
  public abstract getHobbies(): Promise<THobby[]>;
  public abstract getCountries(): Promise<TCountry[]>;
}
