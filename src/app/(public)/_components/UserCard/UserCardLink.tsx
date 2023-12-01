import { Typography, TypographyProps } from '@mui/material';
import Link from 'next/link';

type TProps = {
  href: string;
  text: string;
} & TypographyProps;

export const UserCardLink = (props: TProps) => {
  const { href, text, variant = 'subtitle1', ...rest } = props;

  return (
    <Typography
      variant={variant}
      component={Link}
      href={href}
      color="text.primary"
      sx={{ textDecoration: 'none' }}
      {...rest}
    >
      {text}
    </Typography>
  );
};
