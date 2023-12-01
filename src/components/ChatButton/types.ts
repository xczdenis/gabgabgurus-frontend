import { ButtonProps } from '@mui/material/Button';

export type TOwnProps<C extends React.ElementType> = {
  children?: React.ReactNode;
  memberId?: number | null;
} & ButtonProps<C, { component?: C }>;

export type TProps<C extends React.ElementType> = TOwnProps<C>;
