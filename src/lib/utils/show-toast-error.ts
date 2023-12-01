import toast from 'react-hot-toast';

export const showToastError = (msg = 'Something went wrong', icon?: string) => {
  toast.error(msg, { icon });
};
