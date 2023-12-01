'use client';

import { useHobbies } from '@/lib/hooks/swr/use-hobbies';
import { THobby } from '@/lib/types/refs';
import { Box, Chip, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormikProps } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const MAX_HOBBIES = 5;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

interface IFieldValues {
  hobbies: THobby[];
}

export type TProps<T extends IFieldValues> = {
  userHobbies: THobby[];
  formik: FormikProps<T>;
};

export const FieldHobbies = <T extends IFieldValues>(props: TProps<T>): React.ReactElement => {
  const { userHobbies, formik } = props;
  const { hobbies } = useHobbies();
  const [selectedHobbies, setSelectedHobbies] = useState<typeof userHobbies>(userHobbies);

  const handleHobbiesChange = useCallback(
    (newHobbies: THobby[]) => {
      formik.setFieldValue('hobbies', newHobbies);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    handleHobbiesChange(selectedHobbies);
  }, [handleHobbiesChange, selectedHobbies]);

  const handleChange = (event: SelectChangeEvent<typeof userHobbies>) => {
    const {
      target: { value },
    } = event;

    const updatedHobbies = typeof value === 'string' ? value.split(',') : value;
    if (updatedHobbies.length <= MAX_HOBBIES) {
      setSelectedHobbies(updatedHobbies);
    } else {
      toast.error(`At most ${MAX_HOBBIES} hobbies`);
    }
  };

  const handleDelete = (hobbyToDelete: string) => {
    setSelectedHobbies((prevHobbies) => {
      return prevHobbies.filter((hobby) => hobby !== hobbyToDelete);
    });
  };

  return (
    <FormControl>
      <Typography variant="subtitle2" mb={1} color="text.secondary">
        Hobbies
      </Typography>
      <Select
        multiple
        value={selectedHobbies}
        name="hobbies"
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={value}
                onDelete={() => handleDelete(value)}
                onMouseDown={(event) => {
                  event.stopPropagation();
                }}
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {hobbies?.map((hobby) => (
          <MenuItem key={hobby} value={hobby}>
            {hobby}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
