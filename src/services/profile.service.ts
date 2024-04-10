import { getAuthManager } from '@/utils';

import type { IProfileDto } from '@/data-transfer/responses';

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

const profileService = {
  getProfile,
};
export default profileService;
