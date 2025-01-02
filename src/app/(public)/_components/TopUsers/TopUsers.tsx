import { BaseContainer } from '@/components/BaseContainer';
import { softCall } from '@/lib/utils/soft-call';
import { userService } from '@/modules/services';
import { Box, Typography, Grid2 } from '@mui/material';
import { UserCard } from '../UserCard';

const TopUsers = async () => {
  const topUsers = await softCall(() => userService.getTopMembers());

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
        <Grid2 container spacing={2}>
          {topUsers &&
            topUsers.map((user) => (
              <Grid2 key={user.id} size={{ xs: 12, md: 4 }}>
                <UserCard user={user} />
              </Grid2>
            ))}
        </Grid2>
      </BaseContainer>
    </Box>
  );
};

export default TopUsers;
