import type { AvatarProps, SxProps } from '@mui/material';

export type IAvatarSize = 'medium' | 'large';

export interface IAvatarSizeProps {
  size: number;
  levelWidth: number;
  levelHeight: number;
  levelFontSize: number;
  levelRadius: number;
}

export interface IAvatarProps extends AvatarProps {
  boxSx?: SxProps;
  avatarSx?: SxProps;
  xpProgress?: number;
  level?: number;
  isOnline?: boolean;
  size?: IAvatarSize;
}
