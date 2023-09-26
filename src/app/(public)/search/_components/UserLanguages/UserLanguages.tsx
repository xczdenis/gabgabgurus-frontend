import { Box, Stack, Typography } from '@mui/material';
import { TProps } from './types';
import { UserLanguage } from '@/app/(public)/search/_components/UserLanguage';

const UserLanguages: React.FC<TProps> = (props) => {
  const { languages, header, removeHandler, ...rest } = props;

  return (
    <Box {...rest}>
      {header && (
        <Typography variant="subtitle1" color={'text.secondary'}>
          {header}
        </Typography>
      )}
      <Stack direction="row" flexWrap="wrap">
        {languages.map((language) => (
          <UserLanguage key={language.name} language={language} removeHandler={removeHandler} />
        ))}
      </Stack>
    </Box>
  );
};

export default UserLanguages;
