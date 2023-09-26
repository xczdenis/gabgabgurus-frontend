import { Locale } from 'date-fns';
import locale from 'date-fns/locale/en-US';

interface IFormatDistanceLocale {
  [key: string]: string;
}

interface IFormatDistanceOptions {
  addSuffix?: boolean;
  comparison?: number;
}

const formatDistanceLocale: IFormatDistanceLocale = {
  lessThanXSeconds: '{{count}}s',
  xSeconds: '{{count}}s',
  halfAMinute: '30s',
  lessThanXMinutes: '{{count}}m',
  xMinutes: '{{count}}m',
  aboutXHours: '{{count}}h',
  xHours: '{{count}}h',
  xDays: '{{count}}d',
  aboutXWeeks: '{{count}}w',
  xWeeks: '{{count}}w',
  aboutXMonths: '{{count}}m',
  xMonths: '{{count}}m',
  aboutXYears: '{{count}}y',
  xYears: '{{count}}y',
  overXYears: '{{count}}y',
  almostXYears: '{{count}}y',
};

export const customLocale: Locale = {
  ...locale,
  formatDistance: (token: string, count: number, options?: IFormatDistanceOptions) => {
    options = options || {};

    const result = formatDistanceLocale[token]?.replace('{{count}}', count.toString()) || '';

    if (options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }

    return result;
  },
};
