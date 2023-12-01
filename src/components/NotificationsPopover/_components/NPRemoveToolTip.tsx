'use client';

import { useAppDispatch } from '@/lib/hooks/store';
import { TDefaultId } from '@/lib/types/common';
import { showToastError } from '@/lib/utils/show-toast-error';
import { thunks } from '@/store/thunks/notifications';
import { IconButton, Tooltip } from '@mui/material';
import { CgClose } from 'react-icons/cg';

type TProps = {
  notificationId: TDefaultId;
};

export const NPRemoveToolTip = (props: TProps) => {
  const { notificationId } = props;
  const dispatch = useAppDispatch();

  const removeOne = (event: React.MouseEvent<HTMLButtonElement>, id: TDefaultId) => {
    event.preventDefault();
    dispatch(thunks.removeOne(id)).catch(() => {
      showToastError();
    });
  };

  return (
    <Tooltip title="Remove">
      <IconButton edge="end" onClick={(event) => removeOne(event, notificationId)} size="small">
        <CgClose />
      </IconButton>
    </Tooltip>
  );
};
