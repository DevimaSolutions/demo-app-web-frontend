import { Box, IconButton } from '@mui/material';

import {
  Avatar,
  ChangeNameModal,
  ChangePasswordModal,
  NextLinkButton,
  ProfileModal,
  ShareProfileModal,
} from '@/components';

import styles from './styles';
import { useUserAvatar } from './useUserAvatar';

const UserAvatar = () => {
  const { user, isUserLoading, open, handleModalState } = useUserAvatar();

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
          src={user.avatar?.path}
          level={user.level ?? undefined}
          xpProgress={user.experience ?? undefined}
        />
      </IconButton>
      <ProfileModal
        open={open === 'profile'}
        onClose={handleModalState()}
        openShare={handleModalState('share')}
        openChangePassword={handleModalState('changePassword')}
        openChangeName={handleModalState('changeName')}
        openChangeUsername={handleModalState('changeUsername')}
      />
      <ShareProfileModal
        open={open === 'share'}
        profile={user}
        onClose={handleModalState('profile')}
      />
      <ChangePasswordModal
        open={open === 'changePassword'}
        profile={user}
        onClose={handleModalState('profile')}
      />
      <ChangeNameModal
        open={open === 'changeName'}
        profile={user}
        onClose={handleModalState('profile')}
      />
    </Box>
  );
};

export default UserAvatar;
