import { Stack } from '@mui/material';
import React from 'react';
import { FilterCountries } from '../FilterCountries';
import { FilterHobbies } from '../FilterHobbies';
import { FilterLanguages } from '../FilterLanguages';
import { FilterSidebarHeader } from './FilterSidebarHeader';
import { FilterSidebarResetButton } from './FilterSidebarResetButton';
import { FilterSidebarSearchButton } from './FilterSidebarSearchButton';

const WINDOW_HEIGHT = 200;

export const FilterSidebarContent = () => {
  return (
    <Stack spacing={3} sx={{ p: 3 }}>
      <FilterSidebarHeader />
      <FilterLanguages title="Speaks languages:" storeLanguageKey="speaksLanguages" height={WINDOW_HEIGHT} />
      <FilterLanguages title="Learning languages:" storeLanguageKey="learningLanguages" height={WINDOW_HEIGHT} />
      <FilterCountries height={WINDOW_HEIGHT} />
      <FilterHobbies height={WINDOW_HEIGHT} />
      <FilterSidebarSearchButton />
      <FilterSidebarResetButton />
    </Stack>
  );
};
