import type { UserRole } from '@/constants';

export interface IFullUserResponse {
  id: string;
  email: string;
  role: UserRole;
  imageUri?: string;
  isOnboardingComplete: boolean;
  isEmailVerified: boolean;
}
