import { ISettings } from '@/lib/types/theme';

export type TOwnProps = {
  children: React.ReactNode;
};

export type TProps = TOwnProps;

export type TOptionalISettings = Partial<ISettings>;

export interface IState extends ISettings {
  isInitialized: boolean;
}

export interface IContextProps extends IState {
  handleReset: () => void;
  handleUpdate: (settings: TOptionalISettings) => void;
  switchTheme: () => void;
}
