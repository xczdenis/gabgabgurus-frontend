import { TPaginationParams } from '@/lib/types/pagination';

export type TSearchParams = {
  learning?: string;
  speaks?: string;
  countries?: string;
} & TPaginationParams;

export type TProps = {
  searchParams: TSearchParams;
};
