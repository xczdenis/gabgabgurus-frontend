'use client';

import { ChatButton } from '@/components/ChatButton';
import { useAuth } from '@/lib/hooks/use-auth';
import { TProps } from './types';

const MemberProfile = (props: TProps) => {
  const { memberId } = props;
  const { isAuthenticated } = useAuth();

  return (
    <ChatButton memberId={isAuthenticated ? memberId : null} variant="contained" color="success">
      Send message
    </ChatButton>
  );
};

export default MemberProfile;
