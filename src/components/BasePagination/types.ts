import { PaginationProps } from '@mui/material/Pagination';

export type TOwnProps = {
  currentPage: number;
  totalPages: number;
} & PaginationProps;

export type TProps = TOwnProps;
