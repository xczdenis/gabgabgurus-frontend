import { LanguagesAndHobbies } from '@/app/(public)/users/[id]/_components/LanguagesAndHobbies';
import { MemberCardHeader } from '../MemberCardHeader';
import { Card, CardContent, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { BsEmojiSmile } from 'react-icons/bs';
import { TProps } from './types';

const MemberInfo: React.FC<TProps> = (props) => {
  const { user } = props;

  return (
    <Grid container spacing={4}>
      <Grid xs={12} md={4}>
        <LanguagesAndHobbies user={user} />
      </Grid>
      <Grid xs={12} md={8}>
        <Card>
          <MemberCardHeader header="About me" icon={<BsEmojiSmile />} color="success" />
          <CardContent>
            <Typography>{user.aboutMe}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MemberInfo;
