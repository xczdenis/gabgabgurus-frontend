import { UserCard } from '../UserCard';
import { searchService } from '@/services';
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { BaseContainer } from '@/components/BaseContainer';

const TopUsers: React.FC = async () => {
  const topUsers = await searchService.getTopMembers();

  return (
    <Box
      sx={{
        color: '#fff',
        backgroundColor: 'neutral.800',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundImage: 'url("/assets/gradient-bg.svg")',
        pt: '100px',
        pb: '120px',
      }}
    >
      <BaseContainer>
        <Typography align="center" color="inherit" variant="h3" mb={1}>
          Everything you need to start talking with native speakers
        </Typography>
        <Typography align="center" color="inherit" variant="subtitle1" mb="60px">
          No hassle, just authentic language exchange
        </Typography>
        <Grid container spacing={2}>
          {topUsers.map((user) => (
            <Grid key={user.id} xs={12} md={4}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      </BaseContainer>
    </Box>
  );
};

export default TopUsers;
