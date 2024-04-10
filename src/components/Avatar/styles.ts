import { circularProgressClasses } from '@mui/material';

import { theme } from '@/constants';

import type { IAvatarSize, IAvatarSizeProps } from './types';

export const avatarSizesMapping: Record<IAvatarSize, IAvatarSizeProps> = {
  medium: { size: 48, levelWidth: 20, levelHeight: 19, levelFontSize: 12, levelRadius: 1 },
  large: { size: 80, levelWidth: 27, levelHeight: 23, levelFontSize: 16, levelRadius: 2 },
};

const styles = {
  root: (size: IAvatarSize) => ({
    borderRadius: '50%',
    width: avatarSizesMapping[size].size,
    height: avatarSizesMapping[size].size,
    position: 'relative',
    flexShrink: 0,
  }),
  progress: {
    [`& .${circularProgressClasses.svg}`]: {
      transform: 'rotate(145deg)',
      color: theme.palette.primary[900],
      strokeLinecap: 'round',
    },
  },
  avatar: (size: IAvatarSize) => ({
    width: avatarSizesMapping[size].size,
    height: avatarSizesMapping[size].size,
    position: 'absolute',
    background: theme.palette.grey[100],
    color: theme.palette.primary[500],
    svg: {
      width: avatarSizesMapping[size].size - avatarSizesMapping[size].size / 6,
      height: avatarSizesMapping[size].size - avatarSizesMapping[size].size / 6,
      alignSelf: 'end',
    },
  }),
  level: (size: IAvatarSize) => ({
    borderRadius: avatarSizesMapping[size].levelRadius,
    width: avatarSizesMapping[size].levelWidth,
    height: avatarSizesMapping[size].levelHeight,
    position: 'absolute',
    bottom: -2,
    right: 0,
    background: theme.palette.text.primary,
    fontSize: avatarSizesMapping[size].levelFontSize,
    fontWeight: 600,
    lineHeight: '12px',
    alignContent: 'center',
    textAlign: 'center',
    color: theme.palette.common.white,
  }),
  online: (size: IAvatarSize) => ({
    borderRadius: '50%',
    width: avatarSizesMapping[size].size / 4 + Math.floor(avatarSizesMapping[size].size / 24),
    height: avatarSizesMapping[size].size / 4 + Math.floor(avatarSizesMapping[size].size / 24),
    position: 'absolute',
    bottom: 0,
    right: 0,
    background: theme.palette.success[500],
    border: `${Math.floor(avatarSizesMapping[size].size / 40)}px solid ${
      theme.palette.common.white
    }`,
  }),
} as const;

export default styles;
