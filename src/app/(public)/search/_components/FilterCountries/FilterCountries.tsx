'use client';

import { Checkbox, FormControlLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/search-filters';
import { useCountries } from '@/lib/hooks/use-countries';
import { FilterListBoxContainer } from '../FilterListBoxContainer';

const FilterCountries: React.FC = () => {
  const { countries } = useCountries();
  const stateSearchFilters = useAppSelector((state) => state.searchFilters);
  const dispatch = useAppDispatch();

  const countryOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    let newCountries;

    if (event.target.checked) {
      newCountries = [...stateSearchFilters.countries, value];
    } else {
      newCountries = stateSearchFilters.countries.filter((country) => country !== value);
    }

    dispatch(thunks.setCountries(newCountries));
  };

  return (
    <FilterListBoxContainer title="Countries:">
      {countries?.map((country) => {
        const isChecked = stateSearchFilters.countries.includes(country);

        return (
          <FormControlLabel
            control={<Checkbox checked={isChecked} onChange={countryOnChange} />}
            key={country}
            label={country}
            value={country}
          />
        );
      })}
    </FilterListBoxContainer>
  );
};

export default FilterCountries;
