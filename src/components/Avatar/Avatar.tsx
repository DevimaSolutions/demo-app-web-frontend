import { Avatar as MuiAvatar, Box, CircularProgress } from '@mui/material';

import { combineSx } from '@/utils';

import { AvatarIcon } from '../icons';

import styles, { avatarSizesMapping } from './styles';

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
  size = 'medium',
  ...rest
}: IAvatarProps) => {
  return (
    <Box sx={combineSx(styles.root(size), boxSx)}>
      <MuiAvatar
        src={src}
        sx={combineSx(styles.avatar(size), avatarSx)}
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
          size={avatarSizesMapping[size].size}
          thickness={3}
        />
      ) : null}
      {level ? (
        <Box sx={styles.level(size)}>{level}</Box>
      ) : isOnline ? (
        <Box sx={styles.online(size)} />
      ) : null}
    </Box>
  );
};

export default Avatar;
