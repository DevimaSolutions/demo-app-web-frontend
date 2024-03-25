import { Avatar as MuiAvatar, Box, CircularProgress } from '@mui/material';

import { combineSx } from '@/utils';

import { AvatarIcon } from '../icons';

import styles from './styles';

import type { IAvatarProps } from './types';

const Avatar = ({
  src,
  alt,
  boxSx,
  avatarSx,
  xpProgress,
  level,
  isOnline,
  children,
  ...rest
}: IAvatarProps) => {
  return (
    <Box sx={combineSx(styles.root, boxSx)}>
      <MuiAvatar
        src={src}
        sx={combineSx(styles.avatar, avatarSx)}
        variant="circular"
        alt={alt}
        {...rest}
      >
        {!src && <AvatarIcon />}
      </MuiAvatar>
      {xpProgress ? (
        <CircularProgress
          variant="determinate"
          sx={styles.progress}
          value={xpProgress}
          size="48px"
        />
      ) : null}
      {level ? <Box sx={styles.level}>{level}</Box> : isOnline ? <Box sx={styles.online} /> : null}
    </Box>
  );
};

export default Avatar;
