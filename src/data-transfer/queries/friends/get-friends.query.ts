import type { IBaseOrderQuery } from '../order.query';
import type { IBasePaginationQuery } from '../pagination.query';

export interface IFriendsPaginationQuery extends IBasePaginationQuery, IBaseOrderQuery {
  search?: string;
}
