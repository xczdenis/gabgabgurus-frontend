'use client';

import { UserLanguages } from '@/components/UserLanguages';
import { useProfile } from '@/lib/hooks/swr/use-profile';
import { TLanguage, TLanguageLevel } from '@/lib/types/refs';
import { TUserLanguage } from '@/lib/types/user';
import { showToastError } from '@/lib/utils/show-toast-error';
import { userService } from '@/modules/services';
import { Card, CardContent, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { LanguagesAddButton } from './LanguagesAddButton';
import { LanguagesAutocompleteInput } from './LanguagesAutocompleteInput';
import { LanguagesLevelsRadioGroup } from './LanguagesLevelsRadioGroup';
import { TProps } from './types';

const ProfileLanguages = (props: TProps) => {
  const { userLanguageType, title, subtitle } = props;
  const { profile } = useProfile();
  const [userLanguages, setUserLanguages] = useState<TUserLanguage[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<TLanguageLevel | null>(null);
  const isSpeaking = userLanguageType === 'speaks';
  const isLearning = userLanguageType === 'learning';

  useEffect(() => {
    if (profile) {
      setUserLanguages(profile[userLanguageType]);
    }
  }, [profile, userLanguageType]);

  const createUserLanguage = async (language: TLanguage, languageLevel: TLanguageLevel) => {
    try {
      if (isSpeaking) {
        await userService.updateUserLanguage({ language, languageLevel, isSpeaking });
      } else {
        await userService.updateUserLanguage({ language, languageLevel, isLearning });
      }
      setUserLanguages((prevState) => [...prevState, { language: language, languageLevel: languageLevel }]);
      toast.success('New language added successfully!', { icon: '👏' });
    } catch (err) {
      showToastError();
    }
  };

  const updateUserLanguage = async (language: TLanguage, languageIndex: number, languageLevel: TLanguageLevel) => {
    try {
      await userService.updateUserLanguage({ language, languageLevel });
      setUserLanguages((prevState) => {
        const updatedLanguages = [...prevState];
        updatedLanguages[languageIndex].languageLevel = languageLevel;
        return updatedLanguages;
      });
      toast.success('Language level updated successfully!', { icon: '👏' });
    } catch (err) {
      showToastError();
    }
  };

  const handleAddLanguage = async () => {
    if (!selectedLanguage) {
      toast.error('You have to choose a language');
    } else if (selectedLevel == null) {
      toast.error('You have to specify your language level');
    } else {
      const existingLanguageIndex = userLanguages.findIndex((lang) => lang.language === selectedLanguage);

      if (existingLanguageIndex === -1) {
        await createUserLanguage(selectedLanguage, selectedLevel);
      } else if (userLanguages[existingLanguageIndex].languageLevel !== selectedLevel) {
        await updateUserLanguage(selectedLanguage, existingLanguageIndex, selectedLevel);
      } else {
        toast.error('Language with the selected level already exists');
      }
    }
  };

  const handleRemoveLanguage = async (language: TLanguage) => {
    try {
      if (isSpeaking) {
        await userService.updateUserLanguage({ language, isSpeaking: false });
      } else {
        await userService.updateUserLanguage({ language, isLearning: false });
      }
      setUserLanguages((prevState) => prevState.filter((lang) => lang.language !== language));
      toast.success('Language removed');
    } catch (err) {
      showToastError();
    }
  };

  return (
    <Stack spacing={4}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid xs={12} md={4}>
              <Stack spacing={1}>
                <Typography variant="h6">{title}</Typography>
                <Typography color="text.secondary" variant="body2">
                  {subtitle}
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} sm={12} md={8}>
              <Stack spacing={3}>
                <LanguagesAutocompleteInput onChange={setSelectedLanguage} />
                <LanguagesLevelsRadioGroup onChangeLevel={setSelectedLevel} levelsGroupDisabled={!selectedLanguage} />
              </Stack>
              <LanguagesAddButton
                onClick={handleAddLanguage}
                userLanguages={userLanguages}
                selectedLanguage={selectedLanguage}
                selectedLevel={selectedLevel}
              />
              <UserLanguages mt={3} languages={userLanguages} header="Languages" removeHandler={handleRemoveLanguage} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProfileLanguages;
