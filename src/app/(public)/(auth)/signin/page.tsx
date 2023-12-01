import { Card, CardContent, CardHeader } from '@mui/material';
import { SignInWithSocialProviders } from './_components/SignInWithSocialProviders';

export default function Page() {
  return (
    <div>
      <Card elevation={16} sx={{ mt: 4 }}>
        <CardHeader sx={{ pb: 0, textAlign: 'center' }} title="Log in" />
        <CardContent>
          <SignInWithSocialProviders />
        </CardContent>
      </Card>
    </div>
  );
}
