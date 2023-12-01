import { StackProps } from '@mui/material';

export type TGroupDisplayNameMember = {
  firstName: string;
};

export type TOwnProps = {
  members?: TGroupDisplayNameMember[];
} & StackProps;

export type TProps = TOwnProps;
