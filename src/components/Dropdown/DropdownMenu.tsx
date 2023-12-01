import { Popover, PopoverProps } from '@mui/material';
import { ReactNode, useContext } from 'react';
import { DropdownContext } from './DropdownContext';

type TOwnProps = {
  children?: ReactNode;
} & Omit<PopoverProps, 'open'>;

type TDropdownMenuProps = TOwnProps;

export const DropdownMenu = (props: TDropdownMenuProps) => {
  const { anchorEl, children, PaperProps, ...other } = props;
  const ctx = useContext(DropdownContext);

  return (
    <Popover
      anchorEl={anchorEl || ctx.anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom',
      }}
      open={ctx.open}
      PaperProps={{
        ...PaperProps,
        onMouseEnter: ctx.onMenuEnter,
        onMouseLeave: ctx.onMenuLeave,
        sx: {
          ...PaperProps?.sx,
          pointerEvents: 'auto',
        },
      }}
      sx={{ pointerEvents: 'none' }}
      transformOrigin={{
        horizontal: 'left',
        vertical: 'top',
      }}
      {...other}
    >
      {children}
    </Popover>
  );
};
