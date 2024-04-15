import profileService from '@/services/profile.service';
import { getAuthManager } from '@/utils';

import type { IEnergyResponse } from '@/data-transfer/responses';

const playGame = async () => {
  const auth = await getAuthManager();
  return auth.axios.post<IEnergyResponse>('/energy/decrement').then(async (res) => {
    const user = await profileService.getProfile();
    auth.updateUser(user);
    return res.data;
  });
};

const gameService = {
  playGame,
};
export default gameService;
