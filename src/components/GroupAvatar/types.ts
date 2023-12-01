import { TDefaultId } from '@/lib/types/common';

export type TAvatarGroupMember = {
  id: TDefaultId;
  avatar: string;
};

export type TOwnProps = {
  members?: TAvatarGroupMember[];
};

export type TProps = TOwnProps;
