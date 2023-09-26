import { Hero } from '@/components/Hero';
import { TProps } from './types';
import { BaseContainer } from '@/components/BaseContainer';
import { Box, Divider } from '@mui/material';

const HeroLayout: React.FC<TProps> = (props) => {
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
