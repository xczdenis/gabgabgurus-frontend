import { Card, CardContent, Typography, Grid2 } from '@mui/material';
import { BsEmojiSmile } from 'react-icons/bs';
import { LanguagesAndHobbies } from '../LanguagesAndHobbies';
import { MemberCardHeader } from '../MemberCardHeader';
import { TProps } from './types';

const MemberInfo = (props: TProps) => {
  const { user } = props;

  return (
    <Grid2 container spacing={4}>
      <Grid2 size={{ xs: 12, md: 4 }}>
        <LanguagesAndHobbies user={user} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 8 }}>
        <Card>
          <MemberCardHeader header="About me" icon={<BsEmojiSmile />} color="success" />
          <CardContent>
            <Typography>{user.aboutMe}</Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default MemberInfo;
