import type { OrderDirection } from '@/constants';

export interface IBaseOrderQuery {
  orderBy: string;
  orderDirection: OrderDirection;
}
