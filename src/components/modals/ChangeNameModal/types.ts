import type { IFullUserResponse } from '@/data-transfer/responses';

export interface IChangeNameModalProps {
  onClose: () => void;
  profile: IFullUserResponse;
  open: boolean;
}
