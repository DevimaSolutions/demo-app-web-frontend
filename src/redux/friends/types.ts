import type { IBasePaginationState } from '../types';
import type { IFullUserResponse } from '@/data-transfer/responses';

export default interface IFriendsState extends IBasePaginationState {
  friends: IFullUserResponse[];
  search: string;
}
