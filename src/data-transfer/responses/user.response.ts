import type { UserRole, UserStatus } from '@/constants';

export interface IFullUserResponse {
  id: string;
  email: string;
  role: UserRole;
  imageUri?: string;
  status: UserStatus;
}
