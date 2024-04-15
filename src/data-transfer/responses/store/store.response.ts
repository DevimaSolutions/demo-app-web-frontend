import type { IntervalTypeEnum } from './enums';

export interface ISubscriptionVariant {
  id: string;
  name: string;
  description: string;
  price: 0;
  currency: string;
  interval: IntervalTypeEnum;
}

export interface ISubscriptionSessionResponse {
  sessionUrl: string;
}
