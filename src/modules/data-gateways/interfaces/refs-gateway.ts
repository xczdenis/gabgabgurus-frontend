import { TCountry, THobby, TLanguage } from '@/lib/types/refs';
import { AbstractBaseGateway } from './base-gateway';

export abstract class AbstractRefsGateway extends AbstractBaseGateway {
  public abstract getLanguages(): Promise<TLanguage[]>;
  public abstract getHobbies(): Promise<THobby[]>;
  public abstract getCountries(): Promise<TCountry[]>;
}
