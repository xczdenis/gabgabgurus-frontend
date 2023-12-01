import toast from 'react-hot-toast';

export const showToastSuccess = (msg = 'Completed Successfully!', icon?: string) => {
  toast.success(msg, { icon });
};
