import NextLink from 'next/link';
import { Box, ListItemButton, ListItemIcon, ListItemText, SvgIcon, Typography } from '@mui/material';
import { urls } from '@/urls';
import { PiChatsLight } from 'react-icons/pi';

export const MessagesLink: React.FC = () => {
  return (
    <Box sx={{ p: 1 }}>
      <ListItemButton
        component={NextLink}
        href={urls.chats.list}
        sx={{
          borderRadius: 1,
          px: 1,
          py: 0.5,
        }}
      >
        <ListItemIcon>
          <SvgIcon>
            <PiChatsLight />
          </SvgIcon>
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1">Messages</Typography>} />
      </ListItemButton>
    </Box>
  );
};
