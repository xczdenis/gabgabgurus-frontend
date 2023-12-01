'use client';

import { TLanguage, TLanguageLevel } from '@/lib/types/refs';
import { TUserLanguage } from '@/lib/types/user';
import { Button } from '@mui/material';

type TProps = {
  onClick: () => void;
  userLanguages: TUserLanguage[];
  selectedLanguage: TLanguage | null;
  selectedLevel: TLanguageLevel | null;
};

export const LanguagesAddButton = (props: TProps) => {
  const { onClick, userLanguages, selectedLanguage, selectedLevel } = props;

  const getButtonName = () => {
    const exists = userLanguages.some((language) => language.language === selectedLanguage);
    return exists ? 'Update level' : 'Add language';
  };

  return (
    <Button
      sx={{ mt: 3, mr: 3 }}
      variant="contained"
      disabled={!selectedLanguage || selectedLevel === null}
      onClick={onClick}
    >
      {getButtonName()}
    </Button>
  );
};
