import * as Yup from 'yup';

export const FirstNameMaxLength = 50;
export const AboutMeMaxLength = 1000;

export type TFormValues = {
  firstName: string;
  email: string;
  aboutMe: string;
  hobbies: string[];
};

export const initialValues = {
  firstName: '',
  email: '',
  aboutMe: '',
  hobbies: [],
};

export const validationSchema = Yup.object({
  firstName: Yup.string().max(FirstNameMaxLength).required('Name is required'),
  aboutMe: Yup.string().max(AboutMeMaxLength, `At most ${AboutMeMaxLength} symbols`),
  hobbies: Yup.array().of(Yup.string()),
});
