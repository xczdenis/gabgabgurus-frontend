import { PopoverProps } from '@mui/material';

type TOmittedProps = 'open' | 'anchorEl' | 'onClose';

export type TOwnProps = {
  anchorEl: Element | null;
  onClose?: () => void;
  open: boolean;
} & Omit<PopoverProps, TOmittedProps>;

export type TProps = TOwnProps;
