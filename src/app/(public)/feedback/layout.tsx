import { HeroLayout } from '@/components/HeroLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroLayout heroProps={{ text: 'Online reception' }}>{children}</HeroLayout>
    </>
  );
}
