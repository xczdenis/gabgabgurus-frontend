import { Typography } from '@mui/material';
import { TProps } from './types';

const UserAboutMe = (props: TProps) => {
  const { text } = props;
  return (
    <>
      <Typography color={'text.secondary'} variant="subtitle1" mb={1}>
        About me
      </Typography>
      <Typography>{text}</Typography>
    </>
  );
};

export default UserAboutMe;
