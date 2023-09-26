'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import { useMounted } from '@/lib/hooks/use-mounted';
import { Button, Stack, TextField, Typography } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import { createRef, useRef, useState } from 'react';
import { error } from '@/theme/colors';
import { urls } from '@/urls';
import toast from 'react-hot-toast';
import { useAppSelector } from '@/lib/hooks/store';

type TFormValues = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  submit: null;
};

const initialValues = {
  code1: '',
  code2: '',
  code3: '',
  code4: '',
  code5: '',
  submit: null,
};

const validationSchema = Yup.object({
  code1: Yup.string().max(1).required(),
  code2: Yup.string().max(1).required(),
  code3: Yup.string().max(1).required(),
  code4: Yup.string().max(1).required(),
  code5: Yup.string().max(1).required(),
});

const CodeForm: React.FC = () => {
  const isMounted = useMounted();
  const stateAuth = useAppSelector((state) => state.auth);
  const { signInWithEmailCode } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const refs = useRef(Array.from({ length: 5 }, () => createRef<HTMLInputElement>()));
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleInputChange = (count: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(event.target.name, false, false);
    const nextField = refs.current[count];
    if (event.target.value.length === 1) {
      if (nextField && nextField.current) {
        nextField.current.focus();
      }
    }
    formik.handleChange(event);
  };

  const handleSubmit = async (values: TFormValues, helpers: FormikHelpers<TFormValues>) => {
    setIsSubmitting(true);

    let code = '';
    Object.values(values).forEach((value) => {
      code += value || '';
    });

    signInWithEmailCode(code)
      .then((user) => {
        if (user) {
          toast.success(`Welcome ${user.firstName}!`, { icon: '👏' });
          router.push(urls.index);
        } else {
          setIsSubmitting(false);
          if (isMounted()) {
            helpers.setStatus({ success: false });
            helpers.setErrors({ submit: 'Incorrect code' });

            Array.from({ length: 5 }, (_, i) => `code${i + 1}`).forEach((field) => {
              helpers.setFieldError(field, '');
            });
          }
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        if (isMounted()) {
          helpers.setStatus({ success: false });
          helpers.setErrors({ submit: error.message });
        }
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  if (!stateAuth.emailCodeIsSent) {
    return null;
  }

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <Stack spacing={1} mt={4}>
          <Typography textAlign="center">Code from email:</Typography>
          <Stack direction="row" spacing={2}>
            {[1, 2, 3, 4, 5].map((count) => {
              const code = `code${count}` as keyof TFormValues;
              return (
                <TextField
                  key={count}
                  id={code}
                  name={code}
                  value={formik.values[code]}
                  hiddenLabel
                  variant="standard"
                  error={!!(formik.touched[code] && formik.errors[code])}
                  onBlur={formik.handleBlur}
                  onChange={handleInputChange(count)}
                  inputRef={refs.current[count - 1]}
                  inputProps={{ maxLength: 1, style: { textAlign: 'center', fontSize: 30 } }}
                />
              );
            })}
          </Stack>
          {formik.errors.submit && (
            <Typography variant="subtitle2" alignItems="center" sx={{ textAlign: 'center' }} color={error.main}>
              {formik.errors.submit}
            </Typography>
          )}
        </Stack>
        <Button
          ref={buttonRef}
          disabled={isSubmitting}
          fullWidth
          size="large"
          sx={{ mt: 4 }}
          type="submit"
          variant="contained"
        >
          Log In
        </Button>
      </form>
    </>
  );
};

export default CodeForm;
