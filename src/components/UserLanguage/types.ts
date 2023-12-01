import { TUserLanguage } from '@/lib/types/user';

export type TOwnProps = {
  language: TUserLanguage;
  removeHandler?: (language: string) => void;
};

export type TProps = TOwnProps;
