import { IUser } from '@/lib/types/user';
import { Box, Typography } from '@mui/material';

type TProps = {
  user: IUser | null;
};

export const UserInfo = (props: TProps) => {
  const { user } = props;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body1">{user?.firstName}</Typography>
      <Typography color="text.secondary" variant="body2">
        {user?.email}
      </Typography>
    </Box>
  );
};
