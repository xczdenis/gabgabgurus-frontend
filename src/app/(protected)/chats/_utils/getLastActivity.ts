import { formatDistanceToNowStrict } from 'date-fns';
import { customLocale } from '@/lib/utils/date-locale';

export const getLastActivity = (date: number | Date): string | null => {
  if (!date) {
    return null;
  }

  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: customLocale,
  });
};
