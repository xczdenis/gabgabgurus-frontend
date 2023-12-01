import { TNotification } from '@/lib/types/notification';
import { NPMessageAuthorAvatar } from './NPMessageAuthorAvatar';
import { NPMessageText } from './NPMessageText';

type TProps = {
  notification: TNotification;
};

export const NPPersonalMessage = (props: TProps) => {
  const { notification } = props;

  return (
    <>
      <NPMessageAuthorAvatar
        avatarSrc={notification.message.sender.avatar}
        senderLastActivity={notification.message.sender.lastActivity}
      />
      <NPMessageText
        createdAt={notification.createdAt}
        authorFirstName={notification.message.sender.firstName}
        isRead={notification.isRead}
        text={notification.message.text}
      />
    </>
  );
};
