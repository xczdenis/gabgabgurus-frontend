import { BasePagination } from '@/components/BasePagination';
import { Grid2, Stack } from '@mui/material';
import { UserListCard } from '../UserListCard';
import { TProps } from './types';

const UsersList = (props: TProps) => {
  const { usersPagination } = props;
  const { current: page = 1, results: users = [], pages = 1 } = usersPagination;

  return (
    <>
      <Stack spacing={2}>
        {users.map((user) => (
          <Grid2 key={user.id} size={{ xs: 12, md: 4 }}>
            <UserListCard user={user} />
          </Grid2>
        ))}
      </Stack>
      <BasePagination currentPage={page} totalPages={pages} />
    </>
  );
};

export default UsersList;
