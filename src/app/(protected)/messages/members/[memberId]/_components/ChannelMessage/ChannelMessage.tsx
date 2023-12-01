import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import { memo } from 'react';
import { ChannelMessageStatus } from './ChannelMessageStatus';
import { ChannelMessageTime } from './ChannelMessageTime';
import { TProps } from './types';

export const ChannelMessage = ({ createdAt, authorAvatar, authorName, text, isMine, status }: TProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: isMine ? 'flex-end' : 'flex-start',
      }}
    >
      <Stack
        alignItems="flex-start"
        direction={isMine ? 'row-reverse' : 'row'}
        spacing={2}
        sx={{
          maxWidth: 500,
          ml: isMine ? 'auto' : 0,
          mr: isMine ? 0 : 'auto',
        }}
      >
        <Avatar
          src={authorAvatar}
          sx={{
            height: 32,
            width: 32,
          }}
        />
        <Stack sx={{ alignItems: isMine ? 'end' : 'start' }}>
          <Box display="flex" mb={0.5} sx={{ justifyContent: isMine ? 'end' : 'start' }}>
            <Card
              sx={{
                backgroundColor: isMine ? 'primary.main' : 'background.paper',
                color: isMine ? 'primary.contrastText' : 'text.primary',
                px: 2,
                py: 1,
              }}
            >
              <Typography color="inherit" variant="subtitle2" sx={{ mb: 1 }}>
                {isMine ? 'Me' : authorName}
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{
                  wordBreak: 'break-all',
                  overflowWrap: 'break-word',
                }}
              >
                {text}
              </Typography>
            </Card>
          </Box>
          <Stack direction="row" spacing={1}>
            <ChannelMessageTime createdAt={createdAt} />
            {isMine && <ChannelMessageStatus status={status} />}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export const ChannelMessageMemo = memo(ChannelMessage);
