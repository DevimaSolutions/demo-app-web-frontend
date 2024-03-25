import type { AvatarProps, SxProps } from '@mui/material';

export interface IAvatarProps extends AvatarProps {
  boxSx?: SxProps;
  avatarSx?: SxProps;
  xpProgress?: number;
  level?: number;
  isOnline?: boolean;
}
