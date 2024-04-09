import type { IFullUserResponse } from '@/data-transfer/responses';

export interface IShareProfileModalProps {
  onClose: () => void;
  profile: IFullUserResponse;
  open: boolean;
}
