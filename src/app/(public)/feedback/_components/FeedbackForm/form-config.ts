import * as Yup from 'yup';

export const FirstNameMaxLength = 150;
export const AboutMeMaxLength = 1000;

export type TFormValues = {
  firstName: string;
  email: string;
  text: string;
};

export const initialValues = {
  firstName: '',
  email: '',
  text: '',
};

export const validationSchema = Yup.object({
  firstName: Yup.string().max(FirstNameMaxLength).required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  text: Yup.string().max(AboutMeMaxLength, `At most ${AboutMeMaxLength} symbols`).required('Text is required'),
});
