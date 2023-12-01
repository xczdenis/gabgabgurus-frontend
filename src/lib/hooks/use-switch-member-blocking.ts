import { TDefaultId } from '@/lib/types/common';
import { showToastError } from '@/lib/utils/show-toast-error';
import { userService } from '@/modules/services';
import toast from 'react-hot-toast';

export const useSwitchMemberBlocking = () => {
  const switchMemberBlocking = async (block: boolean, memberId: TDefaultId | undefined) => {
    if (memberId) {
      const action = block ? userService.blockMember : userService.unblockMember;
      try {
        await action(memberId);
        toast.success(`User has been ${block ? 'blocked' : 'unblocked'}`);
      } catch (error) {
        console.error(error);
        showToastError();
      }
    } else {
      toast.error('Unknown member ID', { icon: '🧐' });
    }
  };

  return {
    switchMemberBlocking,
  };
};
