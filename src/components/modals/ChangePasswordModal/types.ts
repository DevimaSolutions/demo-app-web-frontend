import type { IFullUserResponse } from '@/data-transfer/responses';

export interface IChangePasswordModalProps {
  onClose: () => void;
  profile: IFullUserResponse;
  open: boolean;
}
