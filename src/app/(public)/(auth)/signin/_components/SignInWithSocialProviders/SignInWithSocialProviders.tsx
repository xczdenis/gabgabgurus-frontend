import { SocialAccountButton } from '@/components/SocialAccountButton';
import { TOAuthProvider } from '@/lib/types/oauth';
import { Stack } from '@mui/material';
import { VscGithubInverted } from 'react-icons/vsc';

const defaultIconSize = 30;

type TSocialProvider = {
  icon: React.ReactNode;
  provider: TOAuthProvider;
  textOnButton: string;
};

const socialProviders: TSocialProvider[] = [
  {
    icon: <VscGithubInverted size={defaultIconSize} color="black" />,
    provider: 'github',
    textOnButton: 'GitHub',
  },
];

const SignInWithSocialProviders = () => {
  return (
    <Stack px={{ xs: 2, md: 5 }} spacing={2}>
      {socialProviders.map((socialProvider) => {
        return (
          <SocialAccountButton
            key={socialProvider.provider}
            icon={<VscGithubInverted size={30} color="black" />}
            provider={socialProvider.provider}
            textOnButton={socialProvider.textOnButton}
          />
        );
      })}
    </Stack>
  );
};

export default SignInWithSocialProviders;
