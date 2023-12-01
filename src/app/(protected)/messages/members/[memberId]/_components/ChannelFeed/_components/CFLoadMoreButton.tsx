'use client';

import { useAppSelector } from '@/lib/hooks/store';
import { Box, Button } from '@mui/material';
import React, { memo } from 'react';

type TProps = {
  onClick: () => void;
};

export const CFLoadMoreButton = (props: TProps) => {
  const next = useAppSelector((state) => state.chat.next);
  const { onClick } = props;

  return (
    <>
      {next && (
        <Box my={2} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="outlined" size="small" onClick={onClick} color="primary">
            Load more
          </Button>
        </Box>
      )}
    </>
  );
};

export const CMLoadMoreButtonMemo = memo(CFLoadMoreButton);
