'use client';

import { styled } from '@mui/material/styles';
import { useIsBreakpointDown } from '@/lib/hooks/use-is-breakpoint-down';
import { useAppSelector } from '@/lib/hooks/store';

export const UserListContainer = styled('div')(({ theme }) => {
  const mdDown = useIsBreakpointDown('md');
  const stateSearchFilters = useAppSelector((state) => state.searchFilters);
  return {
    // flexGrow: 1,
    // overflow: 'auto',
    paddingLeft: mdDown ? theme.spacing(1) : theme.spacing(3),
    paddingRight: mdDown ? theme.spacing(1) : theme.spacing(3),
    // paddingBottom: theme.spacing(3),
    zIndex: 1,
    [theme.breakpoints.up('lg')]: {
      marginLeft: -380,
    },
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(stateSearchFilters.sidebarIsOpen && {
      [theme.breakpoints.up('lg')]: {
        marginLeft: 0,
      },
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  };
});
