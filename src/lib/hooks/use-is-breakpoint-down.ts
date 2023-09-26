import { TBreakpoint } from '@/lib/types/theme';
import { Theme, useMediaQuery } from '@mui/material';

export const useIsBreakpointDown = (breakpoint: TBreakpoint) => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.down(breakpoint));
};
