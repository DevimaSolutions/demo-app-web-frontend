import type { IFullUserResponse } from '@/data-transfer/responses';
import type { BoxProps } from '@mui/material';

export interface IFriendsSectionProps extends BoxProps {
  friends: IFullUserResponse[];
  isLoading?: boolean;
}
