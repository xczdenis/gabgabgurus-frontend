import { TLanguage, TLanguageLevel } from '@/lib/types/refs';
import { TUserLanguageResponse } from '@/lib/types/user-response';

export const languages: TLanguage[] = [
  'English',
  'Deutsch',
  'Russian',
  'Spanish',
  'Italian',
  'French',
  'Chinese',
  'Japanese',
  'Portuguese',
  'Arabic',
  'Turkish',
  'Korean',
  'Polish',
  'Dutch',
  'Swedish',
  'Hindi',
  'Greek',
  'Indonesian',
  'Hebrew',
  'Thai',
];

export const getRandomLanguage = (): TLanguage => {
  const randomIndex = Math.floor(Math.random() * languages.length);
  return languages[randomIndex];
};

export const getRandomLanguages = (count: number = 5): TLanguage[] => {
  const randomCount = Math.floor(Math.random() * count) + 1;
  const shuffled = [...languages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, randomCount);
};

export const getRandomUserLanguages = (
  count: number = 5,
  options: { is_speaking?: boolean; is_learning?: boolean }
): TUserLanguageResponse[] => {
  const { is_speaking = false, is_learning = false } = options;
  const randomCount = Math.min(Math.floor(Math.random() * count) + 1, languages.length);
  const shuffledLanguages = [...languages].sort(() => 0.5 - Math.random());
  const selectedLanguages = shuffledLanguages.slice(0, randomCount);

  return selectedLanguages.map((language) => ({
    language,
    language_level: Math.floor(Math.random() * 6) as TLanguageLevel,
    is_speaking,
    is_learning,
  }));
};
