import MemberProfileSendMessageButton from '@/app/(public)/users/[id]/_components/MemberProfile/MemberProfileSendMessageButton';
import { BaseContainer } from '@/components/BaseContainer';
import { UserAvatar } from '@/components/UserAvatar';
import { softCall } from '@/lib/utils/soft-call';
import { userService } from '@/modules/services';
import { Box, Stack, Typography } from '@mui/material';
import { BlockButton } from '../BlockButton';
import { BreadCrumbs } from '../BreadCrumbs';
import { MemberInfo } from '../MemberInfo';
import { TProps } from './types';

const MemberProfile = async (props: TProps) => {
  const { memberId } = props;
  const member = await softCall(() => userService.getMemberProfile(memberId));

  if (!member) {
    return null;
  }

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <BaseContainer sx={{ pt: 5 }}>
        <BreadCrumbs />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ mt: 2 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <UserAvatar src={member.avatar} responsible={false} />
            <Box>
              <Typography variant="h6">{member.firstName}</Typography>
              <Typography color="text.secondary" variant="overline">
                {member.country}
              </Typography>
            </Box>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <MemberProfileSendMessageButton memberId={memberId} />
            <BlockButton memberId={memberId} isBlocked={member.isBlocked} />
          </Stack>
        </Stack>
        <Box sx={{ mt: 5 }}>
          <MemberInfo user={member} />
        </Box>
      </BaseContainer>
    </Box>
  );
};

export default MemberProfile;
