import type { ISoftSkillsObject } from './onboarding.response';
import type { UserRole, UserStatus } from '@/constants';

export interface IAvatar {
  id: string;
  name: string;
  path: string;
  mimetype: string;
  size: number;
  createdAt: string;
}
export interface IUserResponse {
  id: string;
  email: string;
  role: UserRole;
  avatar?: IAvatar;
  status: UserStatus;
}
export interface IFullUserResponse extends IUserResponse {
  name: string;
  phoneNumber: string | null;
  username: string;
  age: number | null;
  gender: string | null;
  level: number | null;
  experience: number | null;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  softSkills: ISoftSkillsObject[];
}
