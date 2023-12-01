import { useAppDispatch, useAppSelector } from '@/lib/hooks/store';
import { TDefaultId } from '@/lib/types/common';
import { TMemberProfile } from '@/lib/types/user';
import { thunks } from '@/store/thunks/chat';
import { useCallback, useEffect } from 'react';

type TChannelIdProps = {
  currentChannelId?: TDefaultId;
  memberProfile: TMemberProfile;
};

export const useChannelId = (props: TChannelIdProps) => {
  const { currentChannelId, memberProfile } = props;
  const channelId = useAppSelector((state) => state.chat.channelId);
  const dispatch = useAppDispatch();

  const setOrFetchChannelId = useCallback(
    (memberId: TDefaultId) => {
      if (currentChannelId) {
        dispatch(thunks.setChannelId(currentChannelId));
      } else {
        dispatch(thunks.fetchPrivateChannel(memberId));
      }
    },
    [currentChannelId, dispatch]
  );

  useEffect(() => {
    setOrFetchChannelId(memberProfile.id);
  }, [memberProfile.id, setOrFetchChannelId]);

  return { channelId };
};
