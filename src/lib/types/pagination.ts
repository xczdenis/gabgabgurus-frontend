import { TDefaultId } from '@/lib/types/common';

export type TPaginationParams = {
  page?: string | number;
  count?: string | number;
};

export type TChatIdPaginationRequest = TPaginationParams & {
  chatId: TDefaultId;
};

export type TPaginationData<T> = {
  count: number;
  next: number | null;
  prev: number | null;
  current: number;
  results: T[];
};
