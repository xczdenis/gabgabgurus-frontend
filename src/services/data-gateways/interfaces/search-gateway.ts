import { TMemberPagination, TMemberProfile } from '@/lib/types/user';
import { TPaginationParams } from '@/lib/types/pagination';

export type TSearchRequest = {
  learning?: string;
  speaks?: string;
  countries?: string;
} & TPaginationParams;

export abstract class AbstractSearchGateway {
  public abstract search(params?: TSearchRequest): Promise<TMemberPagination>;
  public abstract getTopMembers(): Promise<TMemberProfile[]>;
}
