import { userService } from '@/services';
import toast from 'react-hot-toast';
import { showToastError } from '@/lib/utils/show-toast-error';
import { TDefaultId } from '@/lib/types/common';

export const useSwitchMemberBlocking = () => {
  const switchMemberBlocking = async (block: boolean, memberId: TDefaultId) => {
    const action = block ? userService.blockMember : userService.unblockMember;

    try {
      await action(memberId);
      toast.success(`User has been ${block ? 'blocked' : 'unblocked'}`);
    } catch {
      showToastError();
    }
  };

  return {
    switchMemberBlocking,
  };
};
