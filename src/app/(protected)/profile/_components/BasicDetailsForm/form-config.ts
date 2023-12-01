import * as Yup from 'yup';
import { TCountry, THobby } from '@/lib/types/refs';

export const FirstNameMaxLength = 50;
export const AboutMeMaxLength = 1000;

export type TFormValues = {
  firstName: string;
  email: string;
  aboutMe: string;
  hobbies: THobby[];
  country: TCountry;
};

export const initialValues = {
  firstName: '',
  email: '',
  aboutMe: '',
  hobbies: [],
  country: '',
};

export const validationSchema = Yup.object({
  firstName: Yup.string().max(FirstNameMaxLength).required('Name is required'),
  aboutMe: Yup.string().max(AboutMeMaxLength, `At most ${AboutMeMaxLength} symbols`),
  hobbies: Yup.array().of(Yup.string()),
});
