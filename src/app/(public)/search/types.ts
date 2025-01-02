import { TPageNumberPaginationParams } from '@/lib/types/pagination';

export type TSearchParams = {
  learning?: string;
  speaks?: string;
  countries?: string;
  hobbies?: string;
} & TPageNumberPaginationParams;

export type TProps = {
  searchParams: Promise<TSearchParams>;
};
