import { TUserProfile } from '@/lib/types/user';
import { TUserLanguagesType } from '@/lib/types/info-data';

export type TOwnProps = {
  profile: TUserProfile;
  userLanguagesType: TUserLanguagesType;
  title: string;
  subtitle: string;
};

export type TProps = TOwnProps;
