import { Box, FormGroup, FormLabel } from '@mui/material';
import React from 'react';
import { TProps } from './types';

const CONTAINER_HEIGHT = 200;

const FilterListBoxContainer = (props: TProps) => {
  const { title, children, height = CONTAINER_HEIGHT } = props;

  return (
    <Box>
      <FormLabel sx={{ display: 'block', mb: 2 }}>{title}</FormLabel>
      <Box
        sx={{
          backgroundColor: (theme) => (theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.50'),
          borderColor: 'divider',
          borderRadius: 1,
          borderStyle: 'solid',
          borderWidth: 1,
        }}
      >
        <Box sx={{ maxHeight: height }} overflow="hidden">
          {/*<Scrollbar sx={{ maxHeight: 200 }}>*/}
          <FormGroup
            sx={{
              py: 1,
              px: 1.5,
            }}
          >
            {children}
          </FormGroup>
          {/*</Scrollbar>*/}
        </Box>
      </Box>
    </Box>
  );
};

export default FilterListBoxContainer;
