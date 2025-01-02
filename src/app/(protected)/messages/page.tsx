import { Navigation } from '@/app/(public)/_components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroLayout } from '@/components/HeroLayout';
import { ChannelList } from './_components/ChannelList';
import { TProps } from './types';

export default async function Chats(props: TProps) {
  const { page = 1 } = (await props.searchParams);
  const pageInt = Number(page);

  return (
    <>
      <Navigation />
      <HeroLayout heroProps={{ text: 'Chats' }} containerProps={{ variant: 'noMobilePadding' }}>
        <ChannelList queryParamPage={pageInt} />
      </HeroLayout>
      <Footer />
    </>
  );
}
