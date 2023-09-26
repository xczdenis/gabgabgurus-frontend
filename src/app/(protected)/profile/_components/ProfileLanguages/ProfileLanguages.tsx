'use client';

import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import { useLanguages } from '@/lib/hooks/use-languages';
import { getLanguageLevelRepr } from '@/lib/utils/get-language-level-repr';
import { useCallback, useState } from 'react';
import { TProps } from './types';
import toast from 'react-hot-toast';
import { TUserLanguage } from '@/lib/types/user';
import { UserLanguages } from '@/app/(public)/search/_components/UserLanguages';
import { userService } from '@/services';
import { showToastError } from '@/lib/utils/show-toast-error';

const languageLevels = [
  [5, 'Native'],
  [4, 'C1-C2'],
  [3, 'B1-B2'],
  [2, 'A1-A2'],
  [1, 'A1'],
  [0, 'A0'],
];

const ProfileLanguages: React.FC<TProps> = (props) => {
  const { profile, userLanguagesType, title, subtitle } = props;
  const { languages } = useLanguages();
  const [speaksLanguages, setSpeaksLanguages] = useState<TUserLanguage[]>(
    userLanguagesType === 'speaks' ? profile.speaks : profile.learning
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const addNewLanguage = async (languageName: string, languageLevel: number) => {
    userService
      .updateLanguages(userLanguagesType, languageName, languageLevel)
      .then(() => {
        setSpeaksLanguages((prevState) => [...prevState, { name: languageName, level: languageLevel }]);
        toast.success('New language added successfully!', { icon: '👏' });
      })
      .catch(() => {
        showToastError();
      });
  };

  const updateLanguageLevel = async (languageName: string, languageIndex: number, languageLevel: number) => {
    userService
      .updateLanguages(userLanguagesType, languageName, languageLevel)
      .then(() => {
        setSpeaksLanguages((prevState) => {
          const updatedLanguages = [...prevState];
          updatedLanguages[languageIndex].level = languageLevel;
          return updatedLanguages;
        });
        toast.success('Language level updated successfully!', { icon: '👏' });
      })
      .catch(() => {
        showToastError();
      });
  };

  const handleAddLanguage = async () => {
    if (!selectedLanguage) {
      toast.error('You have to choose a language');
    } else if (selectedLevel == null) {
      toast.error('You have to specify your language level');
    } else {
      const existingLanguageIndex = speaksLanguages.findIndex((lang) => lang.name === selectedLanguage);

      if (existingLanguageIndex === -1) {
        await addNewLanguage(selectedLanguage, selectedLevel);
      } else if (speaksLanguages[existingLanguageIndex].level !== selectedLevel) {
        await updateLanguageLevel(selectedLanguage, existingLanguageIndex, selectedLevel);
      } else {
        toast.error('Language with the selected level already exists');
      }
    }
  };

  const handleRemoveLanguage = useCallback(
    (language: string) => {
      userService
        .removeLanguage(userLanguagesType, language)
        .then(() => {
          setSpeaksLanguages((prevState) => prevState.filter((lang) => lang.name !== language));
          toast.success('Language removed');
        })
        .catch(() => {
          showToastError();
        });
    },
    [userLanguagesType]
  );

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
                {languages && (
                  <Autocomplete
                    disablePortal
                    fullWidth
                    options={languages}
                    onChange={(_, value) => setSelectedLanguage(value)}
                    renderInput={(params) => <TextField {...params} label="Language" />}
                    renderOption={(props, option) => {
                      return (
                        <li {...props} key={option}>
                          {option}
                        </li>
                      );
                    }}
                    renderTags={(tagValue, getTagProps) => {
                      return tagValue.map((option, index) => (
                        <Chip {...getTagProps({ index })} key={option} label={option} />
                      ));
                    }}
                  />
                )}
                <FormControl>
                  <Typography variant="subtitle1" color={'text.secondary'}>
                    Level
                  </Typography>
                  <RadioGroup
                    row
                    name="language-level"
                    onChange={(event) => setSelectedLevel(Number(event.target.value))}
                  >
                    {languageLevels.map(([level, label]) => (
                      <Tooltip key={level} title={getLanguageLevelRepr(Number(level))} placement="top-start">
                        <FormControlLabel
                          value={level}
                          control={<Radio />}
                          label={`${level} (${label})`}
                          disabled={!selectedLanguage}
                        />
                      </Tooltip>
                    ))}
                  </RadioGroup>
                </FormControl>
              </Stack>
              <Button
                sx={{ mt: 3, mr: 3 }}
                variant="contained"
                disabled={!selectedLanguage || selectedLevel === null}
                onClick={handleAddLanguage}
              >
                Add Language
              </Button>
              <UserLanguages
                mt={3}
                languages={speaksLanguages}
                header="My languages"
                removeHandler={handleRemoveLanguage}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default ProfileLanguages;
