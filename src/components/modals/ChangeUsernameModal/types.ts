import type { IFullUserResponse } from '@/data-transfer/responses';

export interface IChangeUsernameModalProps {
  onClose: () => void;
  profile: IFullUserResponse;
  open: boolean;
}
