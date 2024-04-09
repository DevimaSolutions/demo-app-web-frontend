import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import { Avatar, EditPencilIcon, ShareIcon, SignOutIcon } from '@/components';

import BaseModal from '../BaseModal';

import styles from './styles';
import useProfileModal from './useProfileModal';

import type { IProfileModalProps } from './types';

const ProfileModal = (props: IProfileModalProps) => {
  const { profile, isLoading, handleSignOut } = useProfileModal();

  const EditEndAdornment = (
    <InputAdornment position="end" sx={styles.editEndAdornment}>
      <IconButton>
        <EditPencilIcon />
      </IconButton>
    </InputAdornment>
  );

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
                level={profile.level}
                xpProgress={profile.experience}
              />
              <Box sx={styles.userNamesWrapper}>
                <Box sx={styles.nameWrapper}>
                  <Typography variant="h3">{profile.name.full}</Typography>
                  <Button sx={styles.shareButton}>
                    <ShareIcon />
                  </Button>
                </Box>
                <Typography variant="subtitle2">@{profile.nickname}</Typography>
              </Box>
            </Box>
            <IconButton sx={styles.signOutButton} onClick={handleSignOut}>
              <SignOutIcon disabled />
            </IconButton>
          </Box>
          <Box sx={styles.bottomPart}>
            {/*TODO: add switch button */}
            <Box sx={styles.inputGrid}>
              <TextField
                label="Name"
                defaultValue={profile.name.full}
                InputProps={{
                  readOnly: true,
                  endAdornment: EditEndAdornment,
                }}
                variant="standard"
              />
              <TextField
                label="Username"
                defaultValue={`@${profile.nickname}`}
                InputProps={{
                  readOnly: true,
                  endAdornment: EditEndAdornment,
                }}
                variant="standard"
              />
              <TextField
                label="Email"
                defaultValue={profile.email}
                InputProps={{
                  readOnly: true,
                }}
                disabled
                variant="standard"
              />
              <TextField
                label="Password"
                defaultValue={'password'}
                InputProps={{
                  readOnly: true,
                  endAdornment: EditEndAdornment,
                }}
                type="password"
                variant="standard"
              />
            </Box>
          </Box>
        </>
      )}
    </BaseModal>
  );
};

export default ProfileModal;
