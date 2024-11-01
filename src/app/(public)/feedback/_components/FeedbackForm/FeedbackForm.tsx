'use client';

import { showToastError } from '@/lib/utils/show-toast-error';
import { showToastSuccess } from '@/lib/utils/show-toast-success';
import { userService } from '@/modules/services';
import { Button, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import { BiSolidSend } from 'react-icons/bi';
import { FieldEmail } from './FieldEmail';
import { FieldFirstName } from './FieldFirstName';
import { FieldText } from './FieldText';
import { initialValues, TFormValues, validationSchema } from './form-config';

const FeedbackForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: TFormValues) => {
    setIsSubmitting(true);
    try {
      await userService.sendFeedback(values);
      setIsSubmitting(false);
      showToastSuccess(values.text);
    } catch {
      showToastError();
    }
  };

  const formik = useFormik<TFormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <FieldFirstName formik={formik} />
        <FieldEmail formik={formik} />
        <FieldText formik={formik} />
      </Stack>
      <Button
        startIcon={<BiSolidSend />}
        sx={{ mt: 3 }}
        disabled={!formik.isValid || isSubmitting}
        type="submit"
        variant="contained"
      >
        Send
      </Button>
    </form>
  );
};

export default FeedbackForm;
