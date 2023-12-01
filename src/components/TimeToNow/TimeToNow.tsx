import { formatToHumanDate } from '@/lib/utils/format-to-human-date';
import { Typography } from '@mui/material';
import { TProps } from './types';

const TimeToNow = (props: TProps) => {
  const { title = '', dateInSeconds } = props;
  const dateStr = formatToHumanDate(dateInSeconds);

  return (
    <>
      {dateInSeconds && (
        <Typography color="text.secondary" sx={{ whiteSpace: 'nowrap' }} variant="caption">
          {`${title} ${dateStr}`}
        </Typography>
      )}
    </>
  );
};

export default TimeToNow;
