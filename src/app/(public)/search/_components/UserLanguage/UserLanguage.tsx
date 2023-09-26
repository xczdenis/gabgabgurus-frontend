import { LanguageLevelIcon } from '@/components/LanguageLevelIcon';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { TProps } from './types';
import { CiCircleRemove } from 'react-icons/ci';

const UserLanguage: React.FC<TProps> = (props) => {
  const { language, removeHandler } = props;

  return (
    <Box display="flex" alignItems="center" mr={3} my={1}>
      {removeHandler && (
        <Tooltip title="Remove language">
          <IconButton onClick={() => removeHandler(language.name)}>
            <CiCircleRemove color="#F04438" />
          </IconButton>
        </Tooltip>
      )}
      <Typography mr={1}>{language.name}</Typography>
      <LanguageLevelIcon level={language.level} />
    </Box>
  );
};

export default UserLanguage;
