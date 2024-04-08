import { Box, Button, TextField, Typography } from '@mui/material';

import { Avatar, ShareIcon } from '@/components';

import BaseModal from '../BaseModal';

import styles from './styles';
import useProfileModal from './useProfileModal';

import type { IProfileModalProps } from './types';

const ProfileModal = (props: IProfileModalProps) => {
  const { profile, isLoading } = useProfileModal();

  return (
    <BaseModal sx={styles.root} {...props}>
      <Box sx={styles.topPart}>
        <Avatar size="large" src={profile?.avatar?.path} />
        <Box>
          <Typography>{profile.name.full}</Typography>
          <Typography>{profile.nickname}</Typography>
          <Button>
            <ShareIcon />
          </Button>
        </Box>
      </Box>
      <Box sx={styles.bottomPart}>
        Switch
        <Box>
          <TextField
            label="Name"
            defaultValue={profile.name.full}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            label="Username"
            defaultValue={profile.nickname}
            InputProps={{
              readOnly: true,
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
            }}
            type="password"
            variant="standard"
          />
        </Box>
      </Box>
    </BaseModal>
  );
};

export default ProfileModal;
