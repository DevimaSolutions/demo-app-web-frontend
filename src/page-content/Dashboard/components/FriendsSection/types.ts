import type { BoxProps } from '@mui/material';

interface IFriend {
  fullName: string;
  userImage?: string;
  level: number;
  isOnline: boolean;
}
export interface IFriendsSectionProps extends BoxProps {
  friends: IFriend[];
}
