import { Typography } from '@mui/material';
import { getLastActivity } from '../../_utils/getLastActivity';
import { TProps } from './types';

const LastActivity: React.FC<TProps> = (props) => {
  const { variant = 'default', lastActivity } = props;
  const lastActivityStr = getLastActivity(lastActivity);

  return (
    <>
      {lastActivity && (
        <Typography color="text.secondary" sx={{ whiteSpace: 'nowrap' }} variant="caption">
          {variant === 'default' ? 'last activity ' : ''}
          {lastActivityStr}
        </Typography>
      )}
    </>
  );
};

export default LastActivity;
