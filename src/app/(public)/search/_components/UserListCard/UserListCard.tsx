import { UserHobbies } from '@/components/UserHobbies';
import { UserLanguages } from '@/components/UserLanguages';
import { Card, CardContent, Divider, Unstable_Grid2 as Grid } from '@mui/material';
import { UserAboutMe } from '../UserAboutMe';
import { UserInfo } from '../UserInfo';
import { TProps } from './types';

const UserListCard = (props: TProps) => {
  const { user } = props;

  return (
    <Card sx={{ p: { xs: 1, lg: 3 } }}>
      <Grid spacing={2} container>
        <Grid xs={12} md={3}>
          <UserInfo user={user} />
        </Grid>
        <Grid xs={12} md={9}>
          <Card variant="outlined">
            <CardContent>
              <UserLanguages header="Speaks" languages={user.speaks} mb={2} />
              <UserLanguages header="Learning" languages={user.learning} />
              <Divider sx={{ my: 3 }} />
              <UserAboutMe text={user.aboutMe} />
              <UserHobbies hobbies={user.hobbies} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserListCard;
