import { UserHobbies } from '@/components/UserHobbies';
import { UserLanguages } from '@/components/UserLanguages';
import { Card, CardContent, Stack } from '@mui/material';
import { AiFillLike } from 'react-icons/ai';
import { BsFillBookFill } from 'react-icons/bs';
import { RiSpeakFill } from 'react-icons/ri';
import { MemberCardHeader } from '../MemberCardHeader';
import { TProps } from './types';

const LanguagesAndHobbies = (props: TProps) => {
  const { user } = props;

  return (
    <Stack spacing={3}>
      <Card>
        <MemberCardHeader header="Speaks" icon={<RiSpeakFill />} />
        <CardContent>
          <UserLanguages languages={user.speaks} />
        </CardContent>
      </Card>
      <Card>
        <MemberCardHeader header="Learning" icon={<BsFillBookFill />} />
        <CardContent>
          <UserLanguages languages={user.learning} />
        </CardContent>
      </Card>
      <Card>
        <MemberCardHeader header="Hobbies" icon={<AiFillLike />} />
        <CardContent>
          <UserHobbies noHeader={true} hobbies={user.hobbies} />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default LanguagesAndHobbies;
