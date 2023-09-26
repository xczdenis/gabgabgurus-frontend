'use client';

import { Checkbox, FormControlLabel } from '@mui/material';
import { useLanguages } from '@/lib/hooks/use-languages';
import { useCallback } from 'react';
import { TProps } from './types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/search-filters';
import { FilterListBoxContainer } from '../FilterListBoxContainer';

const FilterLanguages: React.FC<TProps> = (props) => {
  const { title, storeLanguageKey } = props;
  const { languages } = useLanguages();
  const stateSearchFilters = useAppSelector((state) => state.searchFilters);
  const dispatch = useAppDispatch();

  const handleLanguageToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      let newLanguages;

      if (event.target.checked) {
        newLanguages = [...(stateSearchFilters[storeLanguageKey] || []), value];
      } else {
        newLanguages = (stateSearchFilters[storeLanguageKey] || []).filter((language) => language !== value);
      }

      switch (storeLanguageKey) {
        case 'speaksLanguages':
          dispatch(thunks.setSpeaksLanguages(newLanguages));
          break;
        case 'learningLanguages':
          dispatch(thunks.setLearningLanguages(newLanguages));
          break;
        default:
          break;
      }
    },
    [dispatch, stateSearchFilters, storeLanguageKey]
  );

  return (
    <FilterListBoxContainer title={title}>
      {languages?.map((language) => {
        const isChecked = stateSearchFilters[storeLanguageKey].includes(language);

        return (
          <FormControlLabel
            control={<Checkbox checked={isChecked} onChange={handleLanguageToggle} />}
            key={language}
            label={language}
            value={language}
          />
        );
      })}
    </FilterListBoxContainer>
  );
};

export default FilterLanguages;
