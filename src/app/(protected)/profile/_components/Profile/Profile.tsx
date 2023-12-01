import { Stack } from '@mui/material';
import { BasicDetails } from '../BasicDetails';
import { ProfileLanguages } from '../ProfileLanguages';

const Profile = () => {
  return (
    <Stack spacing={4}>
      <BasicDetails />
      <ProfileLanguages
        userLanguageType="speaks"
        title="Languages I speak"
        subtitle="Select the languages in which you're fluent or native. These will be the languages you're
                  open to sharing in language exchanges"
      />
      <ProfileLanguages
        userLanguageType="learning"
        title="Languages I learn"
        subtitle="Specify the languages you're learning and want to improve by talking with native speakers"
      />
    </Stack>
  );
};

export default Profile;
