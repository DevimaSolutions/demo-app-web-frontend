import type { IBasePaginationQuery } from '../pagination.query';

export interface IFriendsPaginationQuery extends IBasePaginationQuery {
  search?: string;
}
