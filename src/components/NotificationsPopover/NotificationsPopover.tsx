'use client';

import { NPBody } from './_components/NPBody';
import { NPContainer } from './_components/NPContainer';
import { NPHeader } from './_components/NPHeader';
import { TProps } from './types';

const NotificationsPopover = (props: TProps) => {
  const { anchorEl, onClose, open = false } = props;

  return (
    <NPContainer onClose={onClose} isOpen={open} anchorEl={anchorEl}>
      <NPHeader />
      <NPBody onClose={onClose} />
    </NPContainer>
  );
};

export default NotificationsPopover;
