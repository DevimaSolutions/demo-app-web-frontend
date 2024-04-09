import { Avatar, Box, Typography } from '@mui/material';

import { AvatarIcon, ExitIcon, QrCode } from '@/components';
import { getEnv } from '@/utils/env/env.util';

import BaseModal from '../BaseModal';

import styles from './styles';

import type { IShareProfileModalProps } from './types';

const ShareProfileModal = ({ onClose, profile, open }: IShareProfileModalProps) => {
  const { frontendUrl } = getEnv();
  return (
    <BaseModal open={open} onClose={onClose} sx={styles.root}>
      <Typography sx={styles.title}>Your profile</Typography>
      <ExitIcon onClick={onClose} sx={styles.exitIcon} />
      {/* TODO: create real link for profile */}
      <QrCode value={`${frontendUrl}/profile/${profile.username}`} sx={styles.qrCode} />
      <Box sx={styles.profileSection}>
        <Avatar src={profile.avatar?.path} alt={'user avatar'} sx={styles.avatar}>
          {!profile.avatar && <AvatarIcon />}
        </Avatar>
        <Box sx={styles.userInfo}>
          <Typography sx={styles.userName}>{profile.name}</Typography>
          <Typography sx={styles.userNickName}>@{profile.username}</Typography>
        </Box>
      </Box>
    </BaseModal>
  );
};

export default ShareProfileModal;
