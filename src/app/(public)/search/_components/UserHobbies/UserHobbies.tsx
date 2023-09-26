import { Typography } from '@mui/material';
import { TProps } from './types';

const UserHobbies: React.FC<TProps> = (props) => {
  const { hobbies, noHeader = false } = props;
  return (
    <>
      {!noHeader && (
        <Typography color={'text.secondary'} variant="subtitle2" mt={2} mb={1}>
          Hobbies
        </Typography>
      )}
      <Typography variant="body2">{hobbies.join(' • ')}</Typography>
    </>
  );
};

export default UserHobbies;
