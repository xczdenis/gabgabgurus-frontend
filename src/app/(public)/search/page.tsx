import { softCall } from '@/lib/utils/soft-call';
import { userService } from '@/modules/services';
import { Stack } from '@mui/material';
import { FilterSidebar } from './_components/FilterSidebar';
import { UsersList } from './_components/UserList';
import { UserListContainer } from './_components/UserListContainer';
import { UserListTopBar } from './_components/UserListTopBar';
import { TProps } from './types';

export default async function Search(props: TProps) {
  const { searchParams } = props;

  const usersPagination = await softCall(() => userService.searchMembers(searchParams));

  return (
    <Stack direction="row">
      <FilterSidebar searchParams={searchParams} />
      <UserListContainer>
        <Stack spacing={4}>
          <UserListTopBar />
          {usersPagination && <UsersList usersPagination={usersPagination} />}
        </Stack>
      </UserListContainer>
    </Stack>
  );
}
