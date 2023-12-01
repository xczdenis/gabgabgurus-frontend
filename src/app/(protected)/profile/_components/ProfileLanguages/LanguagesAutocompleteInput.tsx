'use client';

import { useLanguages } from '@/lib/hooks/swr/use-languages';
import { Autocomplete, Chip, TextField } from '@mui/material';

type TProps = {
  onChange: (value: string | null) => void;
};

export const LanguagesAutocompleteInput = (props: TProps) => {
  const { onChange } = props;
  const { languages } = useLanguages();

  return (
    <>
      {languages && (
        <Autocomplete
          disablePortal
          fullWidth
          options={languages}
          onChange={(_, value) => onChange(value)}
          renderInput={(params) => <TextField {...params} label="Language" />}
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
