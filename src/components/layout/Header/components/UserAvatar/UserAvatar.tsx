import { Box, IconButton } from '@mui/material';

import { Avatar, NextLinkButton, ProfileModal } from '@/components';

import styles from './styles';
import { useUserAvatar } from './useUserAvatar';

const AuthPopup = () => {
  const { user, isLoading, open, onOpenProfileModal, onCloseProfileModal } = useUserAvatar();

  if (isLoading) {
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
        onClick={onOpenProfileModal}
        color="inherit"
      >
        <Avatar src={user.avatar?.path} />
      </IconButton>
      <ProfileModal open={open} onClose={onCloseProfileModal} />
    </Box>
  );
};

export default AuthPopup;
