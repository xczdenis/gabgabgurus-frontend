'use client';

import { TextField } from '@mui/material';
import { FormikProps } from 'formik';
import React from 'react';

const FIELD_NAME = 'email';

interface IFieldValues {
  email: string;
}

type TProps<T extends IFieldValues> = {
  formik: FormikProps<T>;
};

export const FieldEmail = <T extends IFieldValues>(props: TProps<T>): React.ReactElement<any> => {
  const { formik } = props;
  return (
    <TextField
      error={!!(formik.touched.email && formik.errors.email)}
      helperText={(formik.touched.email && formik.errors.email) as string}
      value={formik.values.email}
      label="Email"
      type={FIELD_NAME}
      disabled
    />
  );
};
