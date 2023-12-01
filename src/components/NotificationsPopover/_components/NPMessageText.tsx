import { formatToHumanDate } from '@/lib/utils/format-to-human-date';
import { Box, ListItemText, Typography } from '@mui/material';

type TProps = {
  createdAt: number;
  authorFirstName: string;
  isRead: boolean;
  text: string;
};

export const NPMessageText = (props: TProps) => {
  const { createdAt, authorFirstName, isRead, text } = props;
  const createdAtHuman = formatToHumanDate(createdAt);

  return (
    <>
      <ListItemText
        primary={
          <Box>
            <Typography sx={{ mr: 0.5 }} variant="subtitle2" color="text.primary">
              {authorFirstName}
            </Typography>
            <Typography variant={!isRead ? 'subtitle2' : 'body2'} color={!isRead ? 'text.primary' : 'text.secondary'}>
              {text.slice(0, 60)}
            </Typography>
          </Box>
        }
        secondary={
          <Typography color="text.secondary" variant="caption">
            {createdAtHuman}
          </Typography>
        }
        sx={{ my: 0 }}
      />
    </>
  );
};
