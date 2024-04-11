import type { OrderByField } from './enum';
import type { IBasePaginationState } from '../types';
import type { SortDirection } from '@/constants';
import type { IFullUserResponse } from '@/data-transfer/responses';

export default interface IFriendsState extends IBasePaginationState {
  friends: IFullUserResponse[];
  search: string;
  order: SortDirection;
  sort: OrderByField;
}
