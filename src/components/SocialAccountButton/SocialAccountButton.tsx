'use client';

import { Button } from '@mui/material';
import { TProps } from './types';
import { getAuthorizeUrl } from './utils';

const SocialAccountButton = (props: TProps) => {
  const { icon, provider, textOnButton } = props;

  const handleClick = async () => {
    const authorizeUrl = await getAuthorizeUrl(provider);
    if (authorizeUrl) {
      window.location.href = authorizeUrl;
    }
  };

  return (
    <Button startIcon={icon} variant="outlined" sx={{ borderRadius: 50 }} onClick={handleClick}>
      Continue with {textOnButton}
    </Button>
  );
};

export default SocialAccountButton;
