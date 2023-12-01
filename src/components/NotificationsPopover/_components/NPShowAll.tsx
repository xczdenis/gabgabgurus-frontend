'use client';

import { urls } from '@/urls';
import { Button, ListItem } from '@mui/material';
import NextLink from 'next/link';

type TProps = {
  unreadCount: number;
  onClick?: () => void;
};

export const NPShowAll = (props: TProps) => {
  const { unreadCount, onClick } = props;

  return (
    <ListItem sx={{ justifyContent: 'center' }}>
      <Button component={NextLink} href={urls.chats.list} onClick={onClick}>
        Show All {unreadCount}
      </Button>
    </ListItem>
  );
};
