'use client';

import { useAuth } from '@/lib/hooks/use-auth';
import { useMounted } from '@/lib/hooks/use-mounted';
import { urls } from '@/urls';
import { Box, Button, Link, Stack, TextField } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import { useSearchParams } from 'next/dist/client/components/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as Yup from 'yup';
import { TFormValues } from './types';

const initialValues = {
  email: '',
  password: '',
  submit: null,
};

const validationSchema = Yup.object({
  email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
  password: Yup.string().max(255).required('Password is required'),
});

const SignInWithPasswordForm = () => {
  const isMounted = useMounted();
  const { signIn } = useAuth();
  const params = useSearchParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: TFormValues, helpers: FormikHelpers<TFormValues>) => {
    setIsSubmitting(true);
    signIn(values.email, values.password)
      .then(() => {
        router.push(params.get('next') || urls.index);
      })
      .catch((error) => {
        console.error(error.message);
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

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
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
        <TextField
          id="signup-form-password"
          error={!!(formik.touched.password && formik.errors.password)}
          fullWidth
          helperText={formik.touched.password && formik.errors.password}
          label="Password"
          name="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          type="password"
          value={formik.values.password}
        />
      </Stack>
      <Button disabled={isSubmitting} fullWidth size="large" sx={{ mt: 2 }} type="submit" variant="contained">
        Log In
      </Button>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Link href="#" underline="hover" variant="subtitle2">
          Forgot password?
        </Link>
      </Box>
    </form>
  );
};

export default SignInWithPasswordForm;
