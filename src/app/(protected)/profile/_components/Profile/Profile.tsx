import { Stack } from '@mui/material';
import { BasicDetails } from '../BasicDetails';
import { ProfileLanguages } from '../ProfileLanguages';
import { TProps } from './types';

const Profile: React.FC<TProps> = (props) => {
  const { profile } = props;

  return (
    <Stack spacing={4}>
      <BasicDetails profile={profile} />
      <ProfileLanguages
        profile={profile}
        userLanguagesType="speaks"
        title="Languages I speak"
        subtitle="Select the languages in which you're fluent or native. These will be the languages you're
                  open to sharing in language exchanges"
      />
      <ProfileLanguages
        profile={profile}
        userLanguagesType="learning"
        title="Languages I learn"
        subtitle="Specify the languages you're learning and want to improve by talking with native speakers"
      />
    </Stack>
  );
};

export default Profile;
