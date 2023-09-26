import { Box, FormGroup, FormLabel } from '@mui/material';
import { Scrollbar } from '@/components/Scrollbar';
import { TProps } from './types';

const FilterListBoxContainer: React.FC<TProps> = (props) => {
  const { title, children } = props;

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
        <Box sx={{ maxHeight: 200 }} overflow="auto">
          <Scrollbar sx={{ maxHeight: 200 }}>
            <FormGroup
              sx={{
                py: 1,
                px: 1.5,
              }}
            >
              {children}
            </FormGroup>
          </Scrollbar>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterListBoxContainer;
