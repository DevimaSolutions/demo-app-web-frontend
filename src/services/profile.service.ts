import { getAuthManager } from '@/utils';

import type { IUpdatePasswordRequest } from '@/data-transfer/requests';
import type { IProfileDto, IUpdatePasswordResponse } from '@/data-transfer/responses';

const getProfile = async (accessToken?: string) => {
  const auth = await getAuthManager();

  const headers = accessToken?.length
    ? { headers: { Authorization: `Bearer ${accessToken}` } }
    : {};

  const response = await auth.axios
    .get<IProfileDto>('/auth/profile', {
      ...headers,
    })
    .then((res) => res.data);

  return response;
};

const updatePassword = async (params: IUpdatePasswordRequest) => {
  const auth = await getAuthManager();

  const response = await auth.axios
    .patch<IUpdatePasswordResponse>('/profile/password', params)
    .then((res) => res.data);

  return response;
};

const profileService = {
  getProfile,
  updatePassword,
};
export default profileService;
