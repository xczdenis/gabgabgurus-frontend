'use client';

import { PaletteMode } from '@/config';
import { Box } from '@mui/material';
import { BaseContainer } from '@/components/BaseContainer';

type TProps = {
  children: React.ReactNode;
};

const FooterContainer: React.FC<TProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => (theme.palette.mode === PaletteMode.Dark ? 'neutral.800' : 'neutral.50'),
        borderTopColor: 'divider',
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        pb: 6,
        pt: {
          md: 15,
          xs: 6,
        },
      }}
    >
      <BaseContainer>{children}</BaseContainer>
    </Box>
  );
};

export default FooterContainer;
