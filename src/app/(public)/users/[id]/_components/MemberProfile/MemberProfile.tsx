import { BlockButton } from '@/app/(public)/users/[id]/_components/BlockButton';
import { BreadCrumbs } from '@/app/(public)/users/[id]/_components/BreadCrumbs';
import { MemberInfo } from '../MemberInfo';
import { ChatButton } from '@/components/ChatButton';
import { UserAvatar } from '@/components/UserAvatar';
import { userService } from '@/services';
import { Box, Stack, Typography } from '@mui/material';
import { TProps } from './types';
import { BaseContainer } from '@/components/BaseContainer';

const MemberProfile: React.FC<TProps> = async (props) => {
  const { memberId } = props;
  const user = await userService.getMemberProfile(memberId);
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <BaseContainer sx={{ pt: 5 }}>
          <BreadCrumbs />
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={2}>
              <UserAvatar src={user.avatar} responsible={false} />
              <Box>
                <Typography variant="h6">{user.firstName}</Typography>
                <Typography color="text.secondary" variant="overline">
                  {user.country}
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
              sx={{
                display: {
                  md: 'block',
                  xs: 'none',
                },
              }}
            >
              <ChatButton memberId={memberId} variant="contained" color="success">
                Send message
              </ChatButton>
              <BlockButton memberId={memberId} isBlocked={user.isBlocked} />
            </Stack>
          </Stack>
          <Box sx={{ mt: 5 }}>
            <MemberInfo user={user} />
          </Box>
        </BaseContainer>
      </Box>
    </>
  );
};

export default MemberProfile;
