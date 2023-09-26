import { TOwnProps as THeroProps } from '@/components/Hero/types';
import { TOwnProps as TBaseContainerProps } from '@/components/BaseContainer/types';

export type TOwnProps = {
  children: React.ReactNode;
  heroProps?: THeroProps;
  containerProps?: TBaseContainerProps;
};

export type TProps = TOwnProps;
