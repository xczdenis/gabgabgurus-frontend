import { ChatList } from '@/app/(protected)/chats/_components/ChatList';
import { Navigation } from '@/app/(public)/_components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroLayout } from '@/components/HeroLayout';
import { chatService } from '@/services';
import { TProps } from './types';

export default async function Chats(props: TProps) {
  const { page = '' } = props.searchParams;
  const chatPagination = await chatService.getChats({ page });

  return (
    <>
      <Navigation />
      <HeroLayout heroProps={{ text: 'Chats' }}>
        <ChatList chatPagination={chatPagination} />
      </HeroLayout>
      <Footer />
    </>
  );
}
