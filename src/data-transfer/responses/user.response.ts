import type { ISoftSkillsObject } from './onboarding.response';
import type { UserRole, UserStatus } from '@/constants';

export interface IName {
  first: string;
  last: string;
  full: string;
}
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
  name: IName;
  phoneNumber: string | null;
  nickname: string;
  age: number | null;
  gender: string | null;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
  softSkills: ISoftSkillsObject[];
}
