import { getAuthManager } from '@/utils';

import type { IProfileDto } from '@/data-transfer/responses';

const getProfile = async () => {
  const auth = await getAuthManager();
  const response = await auth.axios.get<IProfileDto>('/auth/profile').then((res) => res.data);

  return response;
};

const profileService = {
  getProfile,
};
export default profileService;
