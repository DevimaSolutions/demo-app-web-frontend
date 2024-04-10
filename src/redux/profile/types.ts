import type { IProfileDto } from '@/data-transfer/responses';

export type IProfileStateDto = Omit<
  IProfileDto,
  'id' | 'role' | 'status' | 'age' | 'gender' | 'createdAt' | 'updatedAt' | 'softSkills'
>;
export default interface IProfileState {
  profile: IProfileStateDto;
  isLoading: boolean;
}
