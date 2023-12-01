'use client';

import { TLanguageLevel } from '@/lib/types/refs';
import { FormControl, RadioGroup, Typography } from '@mui/material';
import { LanguageLevels } from './LanguageLevels';

type TProps = {
  onChangeLevel: (value: TLanguageLevel) => void;
  levelsGroupDisabled: boolean;
};

export const LanguagesLevelsRadioGroup = (props: TProps) => {
  const { onChangeLevel, levelsGroupDisabled } = props;

  return (
    <>
      <FormControl>
        <Typography variant="subtitle1" color={'text.secondary'}>
          Level
        </Typography>
        <RadioGroup
          row
          name="language-level"
          onChange={(event) => onChangeLevel(Number(event.target.value) as TLanguageLevel)}
        >
          <LanguageLevels disabled={levelsGroupDisabled} />
        </RadioGroup>
      </FormControl>
    </>
  );
};
