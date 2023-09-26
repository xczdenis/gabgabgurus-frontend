import { Stack } from '@mui/material';
import { searchService } from '@/services';
import { FilterSidebar } from './_components/FilterSidebar';
import { UserListContainer } from './_components/UserListContainer';
import { UserListTopBar } from './_components/UserListTopBar';
import { UsersList } from './_components/UserList';
import { TProps } from './types';

export default async function Search(props: TProps) {
  const { searchParams } = props;
  const usersPagination = await searchService.search(searchParams);

  return (
    <Stack direction="row">
      <FilterSidebar />
      <UserListContainer>
        <Stack spacing={4}>
          <UserListTopBar />
          <UsersList usersPagination={usersPagination} />
        </Stack>
      </UserListContainer>
    </Stack>
  );
}
