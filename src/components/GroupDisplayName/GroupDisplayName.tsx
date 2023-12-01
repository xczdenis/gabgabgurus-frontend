import { makeGroupDisplayName } from '@/lib/utils/make-group-display-name';
import { Typography } from '@mui/material';
import { TProps } from './types';

const GroupDisplayName = (props: TProps) => {
  const { members } = props;

  const displayName = makeGroupDisplayName(members);

  return (
    <Typography noWrap variant="subtitle2">
      {displayName}
    </Typography>
  );
};

export default GroupDisplayName;
