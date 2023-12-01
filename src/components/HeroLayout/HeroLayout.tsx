import { BaseContainer } from '@/components/BaseContainer';
import { Hero } from '@/components/Hero';
import { Box, Divider } from '@mui/material';
import { TProps } from './types';

const HeroLayout = (props: TProps) => {
  const { children, heroProps, containerProps } = props;

  return (
    <>
      <Hero {...heroProps} />
      <BaseContainer {...containerProps}>
        <Divider />
        <Box py={4}>{children || 'Loading...'}</Box>
      </BaseContainer>
    </>
  );
};

export default HeroLayout;
