import { LanguageLevelIcon } from '@/components/LanguageLevelIcon';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { CiCircleRemove } from 'react-icons/ci';
import { TProps } from './types';

const UserLanguage = (props: TProps) => {
  const { language, removeHandler } = props;

  return (
    <Box display="flex" alignItems="center" mr={3} my={1}>
      {removeHandler && (
        <Tooltip title="Remove language">
          <IconButton onClick={() => removeHandler(language.language)}>
            <CiCircleRemove color="#F04438" />
          </IconButton>
        </Tooltip>
      )}
      <Typography mr={1}>{language.language}</Typography>
      <LanguageLevelIcon level={language.languageLevel} />
    </Box>
  );
};

export default UserLanguage;
