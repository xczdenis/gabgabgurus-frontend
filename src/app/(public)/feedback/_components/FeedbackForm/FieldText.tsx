'use client';

import { TextField } from '@mui/material';
import { FormikProps } from 'formik';
import React from 'react';

const FIELD_NAME = 'text';

interface IFieldValues {
  text: string;
}

type TProps<T extends IFieldValues> = {
  formik: FormikProps<T>;
};

export const FieldText = <T extends IFieldValues>(props: TProps<T>): React.ReactElement => {
  const { formik } = props;
  return (
    <TextField
      error={!!(formik.touched.text && formik.errors.text)}
      helperText={(formik.touched.text && formik.errors.text) as string}
      value={formik.values.text}
      label="Text"
      name={FIELD_NAME}
      type="text"
      required
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
    />
  );
};
