import { IUser } from '@/lib/types/user';
import { TBaseUserResponse } from '@/lib/types/user-response';
import { convertKeysSnakeToCamel } from '@/lib/utils/convert-keys-snake-to-camel';

export const mockAdminResponse: TBaseUserResponse = {
  id: 1,
  first_name: 'Admin-mock',
  email: 'admin-mock@admin.com',
  avatar: '/assets/avatars/avatar14.png',
};

export const mockAdmin: IUser = convertKeysSnakeToCamel(mockAdminResponse);
