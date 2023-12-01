import { BoxProps } from '@mui/material/Box';
import { TUserLanguage } from '@/lib/types/user';

export type TOwnProps = {
  header?: string;
  languages: TUserLanguage[];
  removeHandler?: (language: string) => void;
} & BoxProps;

export type TProps = TOwnProps;
