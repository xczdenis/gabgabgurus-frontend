import { LogoButton } from '@/components/LogoButton';
import { NotificationsButton } from '@/components/NotificationsButton';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { Stack } from '@mui/material';
import TopNavContainer from './TopNavContainer';
import TopNavLoginButton from './TopNavLoginButton';

const TOP_NAV_HEIGHT = 64;

const TopNav = () => {
  return (
    <TopNavContainer>
      <Stack direction="row" spacing={2} sx={{ height: TOP_NAV_HEIGHT }}>
        <LogoButton />
        <Stack alignItems="center" direction="row" justifyContent="flex-end" spacing={2} sx={{ flexGrow: 1 }}>
          <ThemeSwitcher />
          <NotificationsButton />
          <TopNavLoginButton />
        </Stack>
      </Stack>
    </TopNavContainer>
  );
};

export default TopNav;
