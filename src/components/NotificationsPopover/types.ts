import { PopoverProps } from '@mui/material';

type TOmittedProps = 'open' | 'anchorEl' | 'onClose';

export type TProps = {
  open?: boolean;
  anchorEl: Element | null;
  onClose?: () => void;
} & Omit<PopoverProps, TOmittedProps>;
