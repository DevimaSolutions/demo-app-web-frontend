import type { IFullUserResponse } from '@/data-transfer/responses';

export default interface IFriendsState {
  friends: IFullUserResponse[];
  isLoading: boolean;
  page: number;
  limit: number;
  hasMore: boolean;
  total: number;
  search: string;
}
