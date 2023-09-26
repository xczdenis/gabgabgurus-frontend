import { Container } from '@mui/material';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="sm" sx={{ py: { xs: '60px', md: '120px' } }}>
      {children}
    </Container>
  );
}
