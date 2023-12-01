'use client';

import { useAppDispatch } from '@/lib/hooks/store';
import { useProfile } from '@/lib/hooks/swr/use-profile';
import { removeNullKeys } from '@/lib/utils/remove-null-keys';
import { showToastError } from '@/lib/utils/show-toast-error';
import { showToastSuccess } from '@/lib/utils/show-toast-success';
import { userService } from '@/modules/services';
import { thunks } from '@/store/thunks/auth';
import { Button, Skeleton, Stack } from '@mui/material';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { BiSolidSave } from 'react-icons/bi';
import { FieldAboutMe } from './FieldAboutMe';
import { FieldCountry } from './FieldCountry';
import { FieldEmail } from './FieldEmail';
import { FieldFirstName } from './FieldFirstName';
import { FieldHobbies } from './FieldHobbies';
import { initialValues, TFormValues, validationSchema } from './form-config';

const BasicDetailsForm = () => {
  const { profile, revalidate } = useProfile();
  const dispatch = useAppDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: TFormValues) => {
    setIsSubmitting(true);
    try {
      const updatedProfile = await userService.updateUserProfile(removeNullKeys(values));
      dispatch(thunks.updateUser(updatedProfile));
      await revalidate();
      setIsSubmitting(false);
      showToastSuccess('Profile successfully updated!');
    } catch {
      showToastError();
    }
  };

  const formik = useFormik<TFormValues>({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(
    () => {
      if (profile) {
        formik.setValues({
          ...profile,
        });
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [profile]
  );

  if (!profile) {
    return (
      <Stack spacing={2}>
        {[...Array(5)].map((_, index) => (
          <Skeleton key={index} height={50} sx={{ transform: 'none' }} />
        ))}
      </Stack>
    );
  }

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <FieldFirstName formik={formik} />
        <FieldEmail formik={formik} />
        <FieldCountry formik={formik} userCountry={profile.country} />
        <FieldAboutMe formik={formik} />
        <FieldHobbies formik={formik} userHobbies={profile.hobbies} />
      </Stack>
      <Button
        startIcon={<BiSolidSave />}
        sx={{ mt: 3 }}
        disabled={!formik.isValid || isSubmitting}
        type="submit"
        variant="contained"
      >
        Save
      </Button>
    </form>
  );
};

export default BasicDetailsForm;
