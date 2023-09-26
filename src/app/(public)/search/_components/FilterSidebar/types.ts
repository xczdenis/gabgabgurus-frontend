import { DrawerProps } from '@mui/material/Drawer';

export type TOwnProps = {
  onClose?: () => void;
} & DrawerProps;

export type TProps = TOwnProps;
