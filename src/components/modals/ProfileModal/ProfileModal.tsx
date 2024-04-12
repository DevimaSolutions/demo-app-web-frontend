import { Box, Button, IconButton, Input, Typography } from '@mui/material';

import { Avatar, RoundTabsGroup, ShareIcon, SignOutIcon } from '@/components';
import { fileConstants } from '@/constants';

import BaseModal from '../BaseModal';

import { AccountDetails } from './components';
import { switchOptions } from './costants';
import styles from './styles';
import useProfileModal from './useProfileModal';

import type { IProfileModalProps } from './types';

const ProfileModal = (props: IProfileModalProps) => {
  const {
    user,
    handleSignOut,
    tabValue,
    handleTabChange,
    fileInputRef,
    triggerAvatarUpload,
    handleAvatarUpload,
  } = useProfileModal();
  return (
    <BaseModal sx={styles.root} {...props}>
      <Box sx={styles.topPart}>
        <Box sx={styles.avatarNameWrapper}>
          <Avatar
            size="large"
            src={user?.avatar?.path}
            level={user?.level ?? undefined}
            xpProgress={user?.experience ?? undefined}
            avatarSx={styles.avatar}
            onClick={triggerAvatarUpload}
          />
          <Box sx={styles.userNamesWrapper}>
            <Box sx={styles.nameWrapper}>
              <Typography variant="h3">{user?.name}</Typography>
              <Button sx={styles.shareButton} onClick={props.openShare}>
                <ShareIcon />
              </Button>
            </Box>
            <Typography variant="subtitle2">@{user?.username}</Typography>
          </Box>
        </Box>
        <IconButton sx={styles.signOutButton} onClick={handleSignOut}>
          <SignOutIcon disabled />
        </IconButton>
      </Box>
      <Box sx={styles.bottomPart}>
        <RoundTabsGroup options={switchOptions} value={tabValue} onChange={handleTabChange} />
        <AccountDetails
          value={tabValue}
          index={0}
          onChangePassword={props.openChangePassword}
          onChangeName={props.openChangeName}
          onChangeUsername={props.openChangeUsername}
        />
      </Box>
      <Input
        type="file"
        sx={styles.fileInput}
        onChange={handleAvatarUpload}
        inputProps={{
          accept: fileConstants.imageMimeTypes,
          maxsize: fileConstants.avatarSize,
          ref: fileInputRef,
        }}
      />
    </BaseModal>
  );
};

export default ProfileModal;
