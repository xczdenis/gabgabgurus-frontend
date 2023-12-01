'use client';

import { PopoverMenuLink } from '@/components/PopoverMenuLink';
import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { useSwitchMemberBlocking } from '@/lib/hooks/use-switch-member-blocking';
import { TMemberProfile } from '@/lib/types/user';
import { chatWsService } from '@/modules/services';
import { thunks } from '@/store/thunks/chat';
import { error } from '@/theme/colors';
import { urls } from '@/urls';
import { Menu } from '@mui/material';
import { CgUnblock } from 'react-icons/cg';
import { PiChatsLight } from 'react-icons/pi';
import { SiAdblock } from 'react-icons/si';

type TProps = {
  anchorEl: HTMLButtonElement | null;
  memberProfile: TMemberProfile | null;
  isOpen: boolean;
  handleClose: () => void;
};

export const ChannelRoomToolbarMenuPopover = (props: TProps) => {
  const { anchorEl, memberProfile, isOpen, handleClose } = props;
  const { switchMemberBlocking } = useSwitchMemberBlocking();
  const isBlocked = useAppSelector((state) => state.chat.isBlocked);
  const dispatch = useAppDispatch();

  const handleBlockClick = () => {
    if (memberProfile) {
      switchMemberBlocking(!isBlocked, memberProfile.id).then(() => {
        dispatch(thunks.setChatIsBlocked(!isBlocked));
        chatWsService.setUserBlockingStatus({ id: memberProfile.id, isBlocked: !isBlocked });
      });
    }
  };

  return (
    <Menu anchorEl={anchorEl} keepMounted onClose={handleClose} open={isOpen}>
      <PopoverMenuLink
        title={isBlocked ? 'Unblock user' : 'Block user'}
        icon={isBlocked ? <CgUnblock /> : <SiAdblock color={error.main} />}
        onClick={handleBlockClick}
      />
      <PopoverMenuLink url={urls.chats.list} title="Messages" icon={<PiChatsLight />} />
    </Menu>
  );
};
