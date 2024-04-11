import type { OrderDirection } from '@/constants';

export interface IBasePaginationState {
  isLoading: boolean;
  page: number;
  limit: number;
  hasMore: boolean;
  total: number;
}

export interface IBaseOrderState {
  orderBy: string;
  orderDirection: OrderDirection;
}
