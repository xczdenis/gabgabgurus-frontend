import { BasePagination } from '@/components/BasePagination';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { UserListCard } from '../UserListCard';
import { TProps } from './types';

const UsersList = (props: TProps) => {
  const { usersPagination } = props;
  const { current: page = 1, results: users = [], pages = 1 } = usersPagination;

  return (
    <>
      <Stack spacing={2}>
        {users.map((user) => (
          <Grid key={user.id} xs={12} md={4}>
            <UserListCard user={user} />
          </Grid>
        ))}
      </Stack>
      <BasePagination currentPage={page} totalPages={pages} />
    </>
  );
};

export default UsersList;
