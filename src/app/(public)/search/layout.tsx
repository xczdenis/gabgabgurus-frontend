import { HeroLayout } from '@/components/HeroLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <HeroLayout
      heroProps={{ text: 'Search', highlightedText: 'Native Speakers' }}
      containerProps={{ variant: 'noMobilePadding' }}
    >
      {children}
    </HeroLayout>
  );
}
