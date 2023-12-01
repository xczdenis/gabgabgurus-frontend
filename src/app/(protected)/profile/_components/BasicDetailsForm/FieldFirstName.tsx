'use client';

import { TextField } from '@mui/material';
import { FormikProps } from 'formik';
import React from 'react';

const FIELD_NAME = 'firstName';

interface IFieldValues {
  firstName: string;
}

type TProps<T extends IFieldValues> = {
  formik: FormikProps<T>;
};

export const FieldFirstName = <T extends IFieldValues>(props: TProps<T>): React.ReactElement => {
  const { formik } = props;
  return (
    <TextField
      error={!!(formik.touched.firstName && formik.errors.firstName)}
      helperText={(formik.touched.firstName && formik.errors.firstName) as string}
      value={formik.values.firstName}
      label="Name"
      name={FIELD_NAME}
      type="text"
      required
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
    />
  );
};
