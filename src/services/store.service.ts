import { getAuthManager } from '@/utils';

import type { ISubscriptionSessionRequest } from '@/data-transfer/requests';
import type { ISubscriptionSessionResponse, ISubscriptionVariant } from '@/data-transfer/responses';

const getSubscriptionVariants = async () => {
  const auth = await getAuthManager();

  const response = await auth.axios
    .get<ISubscriptionVariant[]>('/subscriptions/stripe')
    .then((res) => res.data);

  return response;
};

const createSubscriptionSession = async (params: ISubscriptionSessionRequest) => {
  const auth = await getAuthManager();

  const response = await auth.axios
    .post<ISubscriptionSessionResponse>('/subscriptions/stripe/session', params)
    .then((res) => res.data);

  return response;
};

const storeService = {
  getSubscriptionVariants,
  createSubscriptionSession,
};
export default storeService;
