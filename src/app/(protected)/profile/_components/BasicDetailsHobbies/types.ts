import { THobby } from '@/lib/types/info-data';

export type TOwnProps = {
  userHobbies: THobby[];
  onHobbiesChange: (hobbies: THobby[]) => void;
};

export type TProps = TOwnProps;
