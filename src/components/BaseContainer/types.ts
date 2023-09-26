import { ContainerProps } from '@mui/material/Container';

export type TOwnProps = {
  children?: React.ReactNode;
  variant?: 'default' | 'noMobilePadding';
} & ContainerProps;

export type TProps = TOwnProps;
