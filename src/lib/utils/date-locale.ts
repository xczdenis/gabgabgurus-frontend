import { Locale } from 'date-fns';
import locale from 'date-fns/locale/en-US';

interface IFormatDistanceOptions {
  addSuffix?: boolean;
  comparison?: number;
}

const formatDistanceLocale = {
  lessThanXSeconds: 'a few seconds',
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
  formatDistance: (token: keyof typeof formatDistanceLocale, count: number, options?: IFormatDistanceOptions) => {
    options = options || {};

    let result = '';
    if (token === 'xSeconds') {
      switch (true) {
        case count <= 5:
          result = 'just right now';
          options.addSuffix = false;
          break;
        case count <= 10:
          result = `${count}s`;
          break;
        case count <= 30:
          result = 'few sec';
          break;
        case count <= 60:
          result = 'half minute';
          break;
        default:
          break;
      }
    }

    if (result === '') {
      result = formatDistanceLocale[token]?.replace('{{count}}', count.toString()) || '';
    }

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
