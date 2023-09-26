import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/material';
import { TProps } from './types';
import { UserListCard } from '../UserListCard';
import { BasePagination } from '@/components/BasePagination';

const UsersList: React.FC<TProps> = (props) => {
  const { usersPagination } = props;
  const { current: page, results: users, count } = usersPagination;

  return (
    <>
      <Stack spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} xs={12} md={4}>
            <UserListCard user={user} />
          </Grid>
        ))}
      </Stack>
      <BasePagination page={page} count={count} />
    </>
  );
};

export default UsersList;
