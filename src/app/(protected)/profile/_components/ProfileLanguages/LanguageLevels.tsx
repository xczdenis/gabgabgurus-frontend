'use client';

import { TLanguageLevel } from '@/lib/types/refs';
import { getLanguageLevelRepr } from '@/lib/utils/get-language-level-repr';
import { FormControlLabel, Radio, Tooltip } from '@mui/material';

type TLanguageLevelRepr = [TLanguageLevel, string];

const languageLevels: TLanguageLevelRepr[] = [
  [5, 'Native'],
  [4, 'C1-C2'],
  [3, 'B1-B2'],
  [2, 'A1-A2'],
  [1, 'A1'],
  [0, 'A0'],
];

type TProps = {
  disabled: boolean;
};

export const LanguageLevels = (props: TProps) => {
  const { disabled } = props;
  return (
    <>
      {languageLevels.map(([languageLevel, label]) => (
        <Tooltip key={languageLevel} title={getLanguageLevelRepr(languageLevel)} placement="top-start">
          <FormControlLabel
            value={languageLevel}
            control={<Radio />}
            label={`${languageLevel} (${label})`}
            disabled={disabled}
          />
        </Tooltip>
      ))}
    </>
  );
};
