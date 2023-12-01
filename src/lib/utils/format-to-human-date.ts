import { customLocale } from '@/lib/utils/date-locale';
import { formatDistanceToNowStrict } from 'date-fns';
import { isNumber } from 'lodash-es';

export const formatToHumanDate = (timestampInSeconds: number | null | undefined): string => {
  if (!timestampInSeconds || !isNumber(timestampInSeconds)) {
    return '';
  }

  return formatDistanceToNowStrict(timestampInSeconds * 1000, {
    addSuffix: true,
    locale: customLocale,
  });
};
