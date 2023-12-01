'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { useLanguages } from '@/lib/hooks/swr/use-languages';
import { thunks } from '@/store/thunks/search-filters';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useCallback } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { FilterListBoxContainer } from '../FilterListBoxContainer';
import { TProps } from './types';

const Row = ({ index, style, data }: ListChildComponentProps) => {
  const { languages, selectedLanguages, handleLanguageToggle } = data;
  const language = languages[index];
  const isChecked = selectedLanguages.includes(language);

  return (
    <div style={style}>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={handleLanguageToggle} />}
        key={language}
        label={language}
        value={language}
      />
    </div>
  );
};

const FilterLanguages = (props: TProps) => {
  const { title, storeLanguageKey, height } = props;
  const { languages } = useLanguages();
  const selectedLanguages = useAppSelector((state) => state.searchFilters[storeLanguageKey]);
  const dispatch = useAppDispatch();

  const handleLanguageToggle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      let newLanguages;

      if (event.target.checked) {
        newLanguages = [...(selectedLanguages || []), value];
      } else {
        newLanguages = (selectedLanguages || []).filter((language) => language !== value);
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
    [dispatch, selectedLanguages, storeLanguageKey]
  );

  return (
    <FilterListBoxContainer title={title}>
      <FixedSizeList
        height={height}
        width="100%"
        itemSize={35}
        itemCount={languages?.length || 0}
        itemData={{ languages, selectedLanguages, handleLanguageToggle }}
      >
        {Row}
      </FixedSizeList>
    </FilterListBoxContainer>
  );
};

export default FilterLanguages;
