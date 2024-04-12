import type { UserGenderEnum } from '../onboarding';

export interface IUpdatePasswordRequest {
  password: string;
  confirmPassword: string;
}

export interface IUpdateProfileRequest {
  name?: string;
  username?: string;
  age?: number;
  gender?: UserGenderEnum;
  phoneNumber?: string;
}
