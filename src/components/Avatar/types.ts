import type { AvatarProps, SxProps } from '@mui/material';

export type IAvatarSize = 'medium' | 'large';
export interface IAvatarProps extends AvatarProps {
  boxSx?: SxProps;
  avatarSx?: SxProps;
  xpProgress?: number;
  level?: number;
  isOnline?: boolean;
  size?: IAvatarSize;
}
