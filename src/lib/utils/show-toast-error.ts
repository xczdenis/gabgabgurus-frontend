import toast from 'react-hot-toast';

export const showToastError = (errorMessage = 'Something went wrong', errorIcon?: string) => {
  toast.error(errorMessage, errorIcon ? { icon: errorIcon } : undefined);
};
