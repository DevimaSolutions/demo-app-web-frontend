import type { IBasePaginationQuery } from '../pagination.query';
import type { SortDirection } from '@/constants';
import type { OrderByField } from '@/redux/friends';

export interface IFriendsPaginationQuery extends IBasePaginationQuery {
  search?: string;
  order?: SortDirection;
  sort?: OrderByField;
}
