'use client';

import { TextField } from '@mui/material';
import { FormikProps } from 'formik';
import React, { useState } from 'react';
import { AboutMeMaxLength } from './form-config';

const FIELD_NAME = 'aboutMe';

interface IFieldValues {
  aboutMe: string;
}

type TProps<T extends IFieldValues> = {
  formik: FormikProps<T>;
};

export const FieldAboutMe = <T extends IFieldValues>(props: TProps<T>): React.ReactElement<any> => {
  const { formik } = props;
  const [aboutMeLength, setAboutMeLength] = useState(0);

  const handleAboutMeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    formik.setFieldTouched(FIELD_NAME);
    formik.handleChange(e);
    setAboutMeLength(e.target.value.length);
  };

  return (
    <TextField
      error={!!(formik.touched.aboutMe && formik.errors.aboutMe)}
      helperText={
        formik.touched.aboutMe && formik.errors.aboutMe
          ? `${formik.errors.aboutMe} (current length: ${aboutMeLength})`
          : ''
      }
      value={formik.values.aboutMe}
      label="About me"
      name={FIELD_NAME}
      type="text"
      multiline
      maxRows={10}
      minRows={4}
      inputProps={{ maxLength: AboutMeMaxLength }}
      onBlur={formik.handleBlur}
      onChange={handleAboutMeChange}
    />
  );
};
