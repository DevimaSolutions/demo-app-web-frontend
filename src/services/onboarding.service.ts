import { getAuthManager } from '@/utils';

import profileService from './profile.service';

import type { IUpdateOnboardingRequest } from '@/data-transfer/requests';
import type {
  IGetOnboardingDataResponse,
  ISoftSkillsObject,
  IUpdateOnboardingResponse,
} from '@/data-transfer/responses';

const updateOnboarding = async (data: IUpdateOnboardingRequest) => {
  const auth = await getAuthManager();

  const response = await auth.axios
    .put<IUpdateOnboardingResponse>('/profile/onboarding', data)
    .then((res) => res.data);

  if (response.complete) {
    const user = await profileService.getProfile();

    auth.updateUser(user);
  }

  return response;
};

const getOnboardingData = async () => {
  const auth = await getAuthManager();

  return auth.axios.get<IGetOnboardingDataResponse>('/profile/onboarding').then((res) => res.data);
};

const getSoftSkills = async () => {
  const auth = await getAuthManager();

  return auth.axios.get<ISoftSkillsObject[]>('/soft-skills').then((res) => res.data);
};

const onboardingService = {
  updateOnboarding,
  getOnboardingData,
  getSoftSkills,
};

export default onboardingService;
