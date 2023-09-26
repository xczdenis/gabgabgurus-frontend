import { Avatar, Box, Card, CardMedia, Link, Stack, Typography } from '@mui/material';
import { formatDistanceToNowStrict } from 'date-fns';
import { TProps } from './types';

const ChatMessage: React.FC<TProps> = (props) => {
  const { authorAvatar, authorName, body, contentType, createdAt, messagePosition, ...other } = props;

  const ago = formatDistanceToNowStrict(createdAt);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: messagePosition === 'right' ? 'flex-end' : 'flex-start',
      }}
      {...other}
    >
      <Stack
        alignItems="flex-start"
        direction={messagePosition === 'right' ? 'row-reverse' : 'row'}
        spacing={2}
        sx={{
          maxWidth: 500,
          ml: messagePosition === 'right' ? 'auto' : 0,
          mr: messagePosition === 'left' ? 'auto' : 0,
        }}
      >
        <Avatar
          src={authorAvatar}
          sx={{
            height: 32,
            width: 32,
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Card
            sx={{
              backgroundColor: messagePosition === 'right' ? 'primary.main' : 'background.paper',
              color: messagePosition === 'right' ? 'primary.contrastText' : 'text.primary',
              px: 2,
              py: 1,
            }}
          >
            <Box sx={{ mb: 1 }}>
              <Link color="inherit" sx={{ cursor: 'pointer' }} variant="subtitle2">
                {authorName}
              </Link>
            </Box>
            {contentType === 'image' && (
              <CardMedia
                onClick={() => {}}
                image={body}
                sx={{
                  height: 200,
                  width: 200,
                }}
              />
            )}
            {contentType === 'text' && (
              <Typography color="inherit" variant="body1">
                {body}
              </Typography>
            )}
          </Card>
          <Box
            sx={{
              display: 'flex',
              justifyContent: messagePosition === 'right' ? 'flex-end' : 'flex-start',
              mt: 1,
              px: 2,
            }}
          >
            <Typography color="text.secondary" noWrap variant="caption">
              {ago} ago
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ChatMessage;
