import { Box, SxProps, Typography } from '@mui/material';
import { BaseContainer } from '@/components/BaseContainer';
import { TProps } from './types';

const componentSx: SxProps = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top center',
  backgroundImage: 'url("/assets/gradient-bg.svg")',
  pt: '120px',
  pb: 4,
};

const Hero: React.FC<TProps> = (props) => {
  const { text, highlightedText, sx, ...rest } = props;

  return (
    <>
      <Box sx={{ ...componentSx, ...sx }} {...rest}>
        <BaseContainer>
          <Box maxWidth="sm">
            <Typography variant="h1" sx={{ mb: 2 }}>
              {text}
              {highlightedText && (
                <Typography component="span" color="primary.main" variant="inherit">
                  &nbsp;{highlightedText}
                </Typography>
              )}
            </Typography>
          </Box>
        </BaseContainer>
      </Box>
    </>
  );
};

export default Hero;
