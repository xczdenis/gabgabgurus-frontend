import { TCountry } from '@/lib/types/refs';

export const countries: TCountry[] = [
  'Russia',
  'USA',
  'England',
  'Italy',
  'France',
  'Germany',
  'Spain',
  'Belgium',
  'Argentina',
  'Brazil',
  'Canada',
];

export const getRandomCountry = (): TCountry => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};

export const getRandomCountries = (count: number = 5): TCountry[] => {
  const randomCount = Math.floor(Math.random() * count) + 1;
  const shuffled = [...countries].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, randomCount);
};
