import { Box, IconButton } from '@mui/material';

import {
  Avatar,
  ChangePasswordModal,
  NextLinkButton,
  ProfileModal,
  ShareProfileModal,
} from '@/components';

import styles from './styles';
import { useUserAvatar } from './useUserAvatar';

const UserAvatar = () => {
  const { user, isUserLoading, profile, open, handleModalState } = useUserAvatar();

  if (isUserLoading) {
    return <Box sx={styles.container} />;
  }

  if (!user) {
    return (
      <Box sx={styles.container}>
        <NextLinkButton href="/sign-in">Sign in</NextLinkButton>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="auth-menu"
        aria-haspopup="true"
        onClick={handleModalState('profile')}
        color="inherit"
      >
        <Avatar
          src={profile.avatar?.path}
          level={profile.level ?? undefined}
          xpProgress={profile.experience ?? undefined}
        />
      </IconButton>
      <ProfileModal
        open={open === 'profile'}
        onClose={handleModalState()}
        openShare={handleModalState('share')}
        openChangePassword={handleModalState('changePassword')}
      />
      <ShareProfileModal open={open === 'share'} profile={user} onClose={handleModalState()} />
      <ChangePasswordModal
        open={open === 'changePassword'}
        profile={user}
        onClose={handleModalState('profile')}
      />
    </Box>
  );
};

export default UserAvatar;
