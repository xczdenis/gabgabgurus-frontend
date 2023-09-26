import { Box, Container, Typography } from '@mui/material';

const SearchHero: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '120px',
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" sx={{ mb: 2 }}>
          Search&nbsp;
          <Typography component="span" color="primary.main" variant="inherit">
            Native Speakers
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default SearchHero;
