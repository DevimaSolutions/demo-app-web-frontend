import { Box, Button, CircularProgress, IconButton, Typography } from '@mui/material';

import { Avatar, RoundTabsGroup, ShareIcon, SignOutIcon } from '@/components';

import BaseModal from '../BaseModal';

import { AccountDetails } from './components';
import { switchOptions } from './costants';
import styles from './styles';
import useProfileModal from './useProfileModal';

import type { IProfileModalProps } from './types';

const ProfileModal = (props: IProfileModalProps) => {
  const { profile, isLoading, handleSignOut, tabValue, handleTabChange } = useProfileModal();

  return (
    <BaseModal sx={styles.root} {...props}>
      {isLoading ? (
        <Box sx={styles.loadingContainer}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <Box sx={styles.topPart}>
            <Box sx={styles.avatarNameWrapper}>
              <Avatar
                size="large"
                src={profile?.avatar?.path}
                level={profile.level ?? undefined}
                xpProgress={profile.experience ?? undefined}
              />
              <Box sx={styles.userNamesWrapper}>
                <Box sx={styles.nameWrapper}>
                  <Typography variant="h3">{profile.name}</Typography>
                  <Button sx={styles.shareButton}>
                    <ShareIcon />
                  </Button>
                </Box>
                <Typography variant="subtitle2">@{profile.username}</Typography>
              </Box>
            </Box>
            <IconButton sx={styles.signOutButton} onClick={handleSignOut}>
              <SignOutIcon disabled />
            </IconButton>
          </Box>
          <Box sx={styles.bottomPart}>
            <RoundTabsGroup options={switchOptions} value={tabValue} onChange={handleTabChange} />
            <AccountDetails value={tabValue} index={0} />
          </Box>
        </>
      )}
    </BaseModal>
  );
};

export default ProfileModal;
