import { PaginationProps } from '@mui/material/Pagination';

export type TOwnProps = {
  page?: number;
  count?: number;
} & PaginationProps;

export type TProps = TOwnProps;
