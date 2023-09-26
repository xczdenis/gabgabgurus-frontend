import { Card, CardContent, CardHeader } from '@mui/material';
import { SignInWithEmailCodeForm } from './_components/SignInWithEmailCodeForm';

export default function Page() {
  return (
    <div>
      <Card elevation={16} sx={{ mt: 4 }}>
        <CardHeader
          // subheader={
          //   <Typography color="text.secondary" variant="body2">
          //     Don&apos;t have an account? &nbsp;
          //     <Link href="/" underline="hover" variant="subtitle2">
          //       Register
          //     </Link>
          //   </Typography>
          // }
          sx={{ pb: 0, textAlign: 'center' }}
          title="Log in"
        />
        <CardContent>
          <SignInWithEmailCodeForm />
        </CardContent>
      </Card>
    </div>
  );
}
