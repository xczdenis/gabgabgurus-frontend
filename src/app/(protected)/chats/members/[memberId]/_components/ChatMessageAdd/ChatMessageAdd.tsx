'use client';

import { Box, IconButton, OutlinedInput, Stack, Tooltip } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useCallback, useRef, useState } from 'react';
import { TbSend } from 'react-icons/tb';
import { TProps } from './types';
import { useAuth } from '@/lib/hooks/use-auth';
import { showToastError } from '@/lib/utils/show-toast-error';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/chat';

const ChatMessageAdd: React.FC<TProps> = (props) => {
  const { chat, ...other } = props;
  const { user } = useAuth();
  const { isBlocked } = useAppSelector((state) => state.chat);
  const [body, setBody] = useState<string>('');
  const dispatch = useAppDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  }, []);

  const handleSend = useCallback(() => {
    if (!body || !user) {
      return;
    }

    dispatch(thunks.sendMessage({ chatId: chat.id, authorId: user?.id, body: body }))
      .then(() => {
        setBody('');
      })
      .catch(() => showToastError());
  }, [body, chat.id, dispatch, user]);

  const handleKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <Stack
      alignItems="center"
      direction="row"
      spacing={2}
      sx={{
        px: 3,
        py: 1,
      }}
      {...other}
    >
      <OutlinedInput
        disabled={isBlocked}
        fullWidth
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder="Leave a message"
        size="small"
        value={body}
      />
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
              disabled={!body || isBlocked}
              sx={{
                backgroundColor: 'primary.main',
                color: 'primary.contrastText',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
              onClick={handleSend}
            >
              <TbSend />
            </IconButton>
          </Box>
        </Tooltip>
      </Box>
      <input hidden ref={fileInputRef} type="file" />
    </Stack>
  );
};

export default ChatMessageAdd;
