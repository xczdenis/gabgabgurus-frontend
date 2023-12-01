import { Box, ListItemButton, ListItemIcon, ListItemText, SvgIcon, Typography } from '@mui/material';
import NextLink from 'next/link';
import { TProps } from './types';

const PopoverMenuLink = (props: TProps) => {
  const { url, title = '', icon, isSvgIcon = true, onClick } = props;

  const getIcon = () => {
    if (icon) {
      if (isSvgIcon) {
        return <SvgIcon>{icon}</SvgIcon>;
      }
      return icon;
    }
    return null;
  };

  return (
    <Box sx={{ p: 1 }} onClick={onClick}>
      <ListItemButton
        component={url ? NextLink : ListItemButton}
        href={url || ''}
        sx={{
          borderRadius: 1,
          px: 1,
          py: 0.5,
        }}
      >
        <ListItemIcon>{getIcon()}</ListItemIcon>
        <ListItemText primary={<Typography variant="body1">{title}</Typography>} />
      </ListItemButton>
    </Box>
  );
};

export default PopoverMenuLink;
