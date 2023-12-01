'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { useCountries } from '@/lib/hooks/swr/use-countries';
import { thunks } from '@/store/thunks/search-filters';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import { FilterListBoxContainer } from '../FilterListBoxContainer';
import { TProps } from './types';

const Row = ({ index, style, data }: ListChildComponentProps) => {
  const item = data[index];
  const selectedElements = useAppSelector((state) => state.searchFilters.countries);
  const dispatch = useAppDispatch();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let newElements;

    if (event.target.checked) {
      newElements = [...selectedElements, value];
    } else {
      newElements = selectedElements.filter((element) => element !== value);
    }

    dispatch(thunks.setCountries(newElements));
  };

  const isChecked = selectedElements.includes(item);

  return (
    <div style={style}>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={onChange} />}
        key={item}
        label={item}
        value={item}
      />
    </div>
  );
};

const FilterCountries = (props: TProps) => {
  const { height } = props;
  const { countries: items } = useCountries();

  return (
    <FilterListBoxContainer title="Countries:" height={height}>
      <FixedSizeList height={height} width="100%" itemSize={35} itemCount={items?.length || 0} itemData={items}>
        {Row}
      </FixedSizeList>
    </FilterListBoxContainer>
  );
};

export default FilterCountries;
