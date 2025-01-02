import { Card, CardContent, Stack, Typography, Grid2 } from '@mui/material';
import { BasicDetailsForm } from '../BasicDetailsForm';
import { CropAvatar } from '../CropAvatar';

const BasicDetails = () => {
  return (
    <Card>
      <CardContent>
        <Grid2 container spacing={3}>
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h6">Basic details</Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 8 }}>
            <Stack spacing={3}>
              <CropAvatar />
              <BasicDetailsForm />
            </Stack>
          </Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default BasicDetails;
