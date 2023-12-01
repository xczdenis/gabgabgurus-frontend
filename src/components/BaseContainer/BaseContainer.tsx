import { Container, SxProps } from '@mui/material';
import { TProps } from './types';

const stylesMap: Record<string, SxProps> = {
  noMobilePadding: {
    px: {
      xs: 0,
      md: 2,
    },
  },
};

const BaseContainer = (props: TProps) => {
  const { children, variant = 'default', sx, ...rest } = props;

  const variantSx = stylesMap[variant] || {};
  const mergedSx = {
    ...variantSx,
    ...sx,
  };

  return (
    <Container maxWidth="lg" sx={mergedSx} {...rest}>
      {children}
    </Container>
  );
};

export default BaseContainer;
