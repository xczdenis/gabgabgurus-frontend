export type TPageNumberPaginationParams = {
  page?: number;
  count?: number;
};

export type TLimitOffsetPaginationParams = {
  limit?: number;
  offset?: number;
};

export type TBasePagination<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type TPagePagination<T> = TBasePagination<T> & {
  pages: number;
  current: number;
};

export type TLimitOffsetPagination<T> = TBasePagination<T>;
