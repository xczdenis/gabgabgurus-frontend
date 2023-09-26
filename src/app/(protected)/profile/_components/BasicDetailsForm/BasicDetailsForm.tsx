'use client';

import { Button, Stack, TextField } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { BasicDetailsHobbies } from '../BasicDetailsHobbies';
import { AboutMeMaxLength, initialValues, TFormValues, validationSchema } from './form-config';
import { TProps } from './types';
import { THobby } from '@/lib/types/info-data';
import { userService } from '@/services';
import { useAppDispatch } from '@/lib/hooks/store';
import { thunks } from '@/store/thunks/auth';
import { showToastError } from '@/lib/utils/show-toast-error';

const BasicDetailsForm: React.FC<TProps> = (props) => {
  const { profile } = props;
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [aboutMeLength, setAboutMeLength] = useState(0);

  const handleSubmit = (values: TFormValues) => {
    setIsSubmitting(true);
    userService
      .updateUserProfile(values)
      .then((updatedProfile) => {
        dispatch(thunks.updateUser(updatedProfile));
        setIsSubmitting(false);
      })
      .catch(() => {
        showToastError();
      });
  };

  const formik = useFormik<TFormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleAboutMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.handleChange(e);
    setAboutMeLength(e.target.value.length);
  };

  const handleHobbiesChange = useCallback(
    (newHobbies: THobby[]) => {
      formik.setFieldValue('hobbies', newHobbies);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(
    () => {
      formik.setValues({
        ...profile,
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <TextField
          error={!!(formik.touched.firstName && formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          value={formik.values.firstName}
          label="Name"
          name="firstName"
          type="text"
          required
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <TextField
          error={!!(formik.touched.email && formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          value={formik.values.email}
          label="Email"
          type="email"
          disabled
        />
        <TextField
          error={!!(formik.touched.aboutMe && formik.errors.aboutMe)}
          helperText={
            formik.touched.aboutMe && formik.errors.aboutMe
              ? `${formik.errors.aboutMe} (current length: ${aboutMeLength})`
              : ''
          }
          value={formik.values.aboutMe}
          label="About me"
          name="aboutMe"
          type="text"
          multiline
          maxRows={10}
          minRows={4}
          inputProps={{ maxLength: AboutMeMaxLength }}
          onBlur={formik.handleBlur}
          onChange={handleAboutMeChange}
        />
        <BasicDetailsHobbies userHobbies={profile.hobbies} onHobbiesChange={handleHobbiesChange} />
      </Stack>
      <Button sx={{ mt: 3 }} disabled={!formik.isValid || isSubmitting} type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
};

export default BasicDetailsForm;
