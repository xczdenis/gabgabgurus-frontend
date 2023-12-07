'use client';

import { withAuthenticatedUser } from '@/lib/hoks/with-authenticated-user';
import { useAppSelector } from '@/lib/hooks/store';
import { OutlinedInput, Stack } from '@mui/material';
import { ChangeEvent, KeyboardEvent, useCallback, useMemo, useState } from 'react';
import { usePrivateDialog } from './_hooks/use-private-dialog';
import { SendButtonMemo } from './MessageInputBoxSendButton';
import { TProps } from './types';

const MessageInputBox = (props: TProps) => {
  const { memberProfile, user } = props;
  const isBlocked = useAppSelector((state) => state.chat.isBlocked);
  const [text, setText] = useState('');
  const [isMessageSending, setIsMessageSending] = useState(false);

  const buttonIsDisabled = isBlocked || !text || isMessageSending;

  const handleMessageCreated = useCallback(() => {
    setText('');
  }, []);

  const privateDialogParams = useMemo(
    () => ({
      userId: user.id,
      memberId: memberProfile.id,
      blockedForMember: memberProfile.blockedFor,
      socketMessageCallbacks: { message: handleMessageCreated },
    }),
    [user.id, memberProfile.id, memberProfile.blockedFor, handleMessageCreated]
  );

  const { SendMessage } = usePrivateDialog(privateDialogParams);

  const handleSendMessage = useCallback(async () => {
    setIsMessageSending(true);
    await SendMessage(text);
    setIsMessageSending(false);
  }, [SendMessage, text]);

  const handleKeyUp = useCallback(
    async (event: KeyboardEvent) => {
      if (event.code === 'Enter') {
        await handleSendMessage();
      }
    },
    [handleSendMessage]
  );

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }, []);

  if (memberProfile.id === user.id) {
    return null;
  }

  return (
    <Stack
      alignItems="center"
      direction="row"
      spacing={2}
      sx={{
        px: 3,
        py: 1,
      }}
    >
      <OutlinedInput
        disabled={isBlocked}
        value={text}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        fullWidth
        placeholder="Leave a message"
        size="small"
      />
      <SendButtonMemo disabled={buttonIsDisabled} onClick={handleSendMessage} />
    </Stack>
  );
};

export default withAuthenticatedUser(MessageInputBox);
