import { Profile } from '@/app/(protected)/profile/_components/Profile';
import { userService } from '@/services';

export default async function Page() {
  const profile = await userService.getUserProfile();
  return <Profile profile={profile} />;
}
