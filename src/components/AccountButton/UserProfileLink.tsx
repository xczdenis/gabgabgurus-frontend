import NextLink from 'next/link';
import { Avatar, Box, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { urls } from '@/urls';
import { IUser } from '@/lib/types/user';

type TProps = {
  user: IUser | null;
};

export const UserProfileLink: React.FC<TProps> = (props) => {
  const { user } = props;

  return (
    <Box sx={{ p: 1 }}>
      <ListItemButton
        component={NextLink}
        href={urls.profile}
        sx={{
          borderRadius: 1,
          px: 1,
          py: 0.5,
        }}
      >
        <ListItemIcon>
          <Avatar src={user?.avatar} />
        </ListItemIcon>
        <ListItemText primary={<Typography variant="body1">Profile</Typography>} />
      </ListItemButton>
    </Box>
  );
};
