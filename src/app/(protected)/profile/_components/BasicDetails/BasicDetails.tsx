import { Card, CardContent, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { BasicDetailsForm } from '../BasicDetailsForm';
import { CropAvatar } from '../CropAvatar';

const BasicDetails = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid xs={12} md={4}>
            <Typography variant="h6">Basic details</Typography>
          </Grid>
          <Grid xs={12} md={8}>
            <Stack spacing={3}>
              <CropAvatar />
              <BasicDetailsForm />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BasicDetails;
