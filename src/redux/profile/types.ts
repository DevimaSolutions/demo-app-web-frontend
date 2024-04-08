import type { IProfileDto } from '@/data-transfer/responses';

export default interface IProfileState {
  profile: Omit<
    IProfileDto,
    'id' | 'role' | 'status' | 'age' | 'gender' | 'createdAt' | 'updatedAt' | 'softSkills'
  >;
  isLoading: boolean;
}
