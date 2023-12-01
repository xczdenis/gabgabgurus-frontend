'use client';

import { Box, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { TbSend } from 'react-icons/tb';

export type TProps = {
  disabled: boolean;
  onClick: () => void;
};

export const MessageInputBoxSendButton = (props: TProps) => {
  const { disabled, onClick } = props;

  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        m: -2,
        ml: 2,
      }}
    >
      <Tooltip title="Send">
        <Box sx={{ m: 1 }}>
          <IconButton
            color="primary"
            disabled={disabled}
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
            onClick={onClick}
          >
            <TbSend />
          </IconButton>
        </Box>
      </Tooltip>
    </Box>
  );
};

export const SendButtonMemo = React.memo(MessageInputBoxSendButton);
