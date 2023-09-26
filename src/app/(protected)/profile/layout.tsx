import { HeroLayout } from '@/components/HeroLayout';
import { Navigation } from '@/app/(public)/_components/Navigation';
import { Footer } from '@/components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <HeroLayout heroProps={{ text: 'My Account' }}>{children}</HeroLayout>
      <Footer />
    </>
  );
}
