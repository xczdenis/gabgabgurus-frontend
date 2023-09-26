'use client';

import { SvgIcon, Theme, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TProps } from './types';
import CreditCard01 from '@/lib/icons/untitled-ui/duocolor/CreditCard01';
import { PaletteMode } from '@/config';

const TipRoot = styled('div')(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.mode === PaletteMode.Dark ? theme.palette.neutral[800] : theme.palette.neutral[100],
  borderRadius: theme.shape.borderRadius,
  display: 'flex',
  padding: theme.spacing(1),
}));

const Tip: React.FC<TProps> = (props) => {
  const { message } = props;

  return (
    <TipRoot>
      <SvgIcon color="action" sx={{ mr: 1 }}>
        <CreditCard01 />
      </SvgIcon>
      <Typography
        color="text.secondary"
        sx={{
          alignItems: 'center',
          display: 'flex',
          '& span': {
            fontWeight: 700,
            mr: 0.5,
          },
        }}
        variant="caption"
      >
        <span>Tip.</span> {message}
      </Typography>
    </TipRoot>
  );
};

export default Tip;
