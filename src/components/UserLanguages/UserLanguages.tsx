import { UserLanguage } from '@/components/UserLanguage';
import { Box, Stack, Typography } from '@mui/material';
import { TProps } from './types';

const UserLanguages = (props: TProps) => {
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
          <UserLanguage key={language.language} language={language} removeHandler={removeHandler} />
        ))}
      </Stack>
    </Box>
  );
};

export default UserLanguages;
