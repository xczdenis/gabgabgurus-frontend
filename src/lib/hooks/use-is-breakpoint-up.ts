import { TBreakpoint } from '@/lib/types/theme';
import { Theme, useMediaQuery } from '@mui/material';

export const useIsBreakpointUp = (breakpoint: TBreakpoint) => {
  return useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));
};
