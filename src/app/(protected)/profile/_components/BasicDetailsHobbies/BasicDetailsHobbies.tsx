'use client';

import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { TProps } from './types';
import { useHobbies } from '@/lib/hooks/use-hobbies';
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

const BasicDetailsHobbies: React.FC<TProps> = (props) => {
  const { userHobbies, onHobbiesChange } = props;
  const { hobbies } = useHobbies();
  const [selectedHobbies, setSelectedHobbies] = useState<typeof userHobbies>(userHobbies);

  useEffect(() => {
    onHobbiesChange(selectedHobbies);
  }, [onHobbiesChange, selectedHobbies]);

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

export default BasicDetailsHobbies;
