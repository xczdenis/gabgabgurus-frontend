'use client';

import { useMounted } from '@/lib/hooks/use-mounted';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { useCallback, useEffect, useState } from 'react';
import { authService, localStorageService } from '@/services';
import { BiMailSend } from 'react-icons/bi';
import { makeStorageKey } from '@/lib/utils/make-storage-key';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@/lib/hooks/store';
import { slice } from '@/store/slices/auth';

const StorageKey = makeStorageKey('confirmationCodeSendingTime');
const MaxWaitTimeInSeconds = 3;
const MaxWaitTimeInMilliseconds = MaxWaitTimeInSeconds * 1000;

type TFormValues = {
  email: string;
  submit: null;
};

const initialValues = {
  email: '',
  submit: null,
};

const validationSchema = Yup.object({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
});

const EmailForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isMounted = useMounted();
  const [isWaitingCode, setIsWaitingCode] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const storedTime = localStorageService.get<string>(StorageKey);
    if (storedTime) {
      const elapsedTime = new Date().getTime() - Number(storedTime);
      if (elapsedTime < MaxWaitTimeInMilliseconds) {
        setTimeLeft(Math.ceil((MaxWaitTimeInMilliseconds - elapsedTime) / 1000));
      }
    }
    dispatch(slice.actions.setEmailCodeIsSent(false));
  }, [dispatch]);

  useEffect(() => {
    let interval: number;
    if (timeLeft !== null && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft((prevTime) => (prevTime !== null ? prevTime - 1 : null));
      }, 1000);
    } else {
      localStorageService.remove(StorageKey);
      setIsWaitingCode(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  const handleSubmit = useCallback((values: TFormValues, helpers: FormikHelpers<TFormValues>) => {
    authService
      .sendEmailCode()
      .then(() => {
        setIsWaitingCode(true);
        localStorageService.set(StorageKey, `${new Date().getTime()}`);
        setTimeLeft(MaxWaitTimeInSeconds);
        toast.success('The code has been sent to your email. Check the spam folder.', { duration: 7000 });
        dispatch(slice.actions.setEmailCodeIsSent(true));
      })
      .catch(() => {
        toast.error('An error has occurred 🙁');
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: 'An error has occurred 🙁' });
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <TextField
          id="signup-form-email"
          error={!!(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          value={formik.values.email}
          label="Email Address"
          name="email"
          type="email"
          fullWidth
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <Button disabled={isWaitingCode} type="submit" variant="outlined" startIcon={<BiMailSend size={24} />}>
          Send code
        </Button>
        {timeLeft && timeLeft > 0 ? (
          <Typography variant="subtitle2" alignItems="center" sx={{ textAlign: 'center' }} color="text.secondary">
            Resend code ({timeLeft})
          </Typography>
        ) : null}
        {formik.errors.submit && (
          <Typography variant="subtitle2" alignItems="center" sx={{ textAlign: 'center' }} color="text.secondary">
            {formik.errors.submit}
          </Typography>
        )}
      </Stack>
    </form>
  );
};

export default EmailForm;
