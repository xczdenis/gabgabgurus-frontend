'use client';

import { useCountries } from '@/lib/hooks/swr/use-countries';
import { TCountry } from '@/lib/types/refs';
import { Autocomplete, Chip, TextField } from '@mui/material';
import { FormikProps } from 'formik';
import React, { useState } from 'react';

interface IFieldValues {
  country: TCountry;
}

export type TProps<T extends IFieldValues> = {
  userCountry: TCountry;
  formik: FormikProps<T>;
};

export const FieldCountry = <T extends IFieldValues>(props: TProps<T>): React.ReactElement => {
  const { userCountry, formik } = props;
  const [selectedCountry, setSelectedCountry] = useState(userCountry);
  const { countries } = useCountries();

  const handleChange = (country: TCountry | null) => {
    if (country) {
      formik.setFieldValue('country', country);
      setSelectedCountry(country);
    }
  };

  return (
    <>
      {countries && (
        <Autocomplete
          disablePortal
          fullWidth
          value={selectedCountry}
          options={countries}
          onChange={(_, value) => handleChange(value)}
          renderInput={(params) => <TextField {...params} label="Country" />}
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                {option}
              </li>
            );
          }}
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => <Chip {...getTagProps({ index })} key={option} label={option} />);
          }}
        />
      )}
    </>
  );
};
