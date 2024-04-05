import { getAuthManager } from '@/utils';

import type { IFriendsPaginationQuery } from '@/data-transfer/queries';
import type { IFullUserResponse, IPaginationResponse } from '@/data-transfer/responses';

const getFriends = async (params: IFriendsPaginationQuery) => {
  const auth = await getAuthManager();
  const response = await auth.axios
    .get<IPaginationResponse<IFullUserResponse>>('/profile/friends', { params })
    .then((res) => res.data);

  return response;
};

const friendsService = {
  getFriends,
};

export default friendsService;
