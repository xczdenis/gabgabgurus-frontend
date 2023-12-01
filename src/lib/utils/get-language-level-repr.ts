import { TLanguageLevel } from '@/lib/types/refs';

export const languageLevels = [
  'Beginner (A0)',
  'Elementary (A1)',
  'Intermediate (A1-A2)',
  'Advanced (B1-B2)',
  'Proficiency (C1-C2)',
  'Native',
];

export const getLanguageLevelRepr = (level: TLanguageLevel) => languageLevels[level];
