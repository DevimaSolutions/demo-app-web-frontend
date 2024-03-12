import { UserRole } from '@/constants';

import type { IFullUserResponse } from '@/data-transfer/responses';

const getAuthRedirect = (user?: IFullUserResponse | null) => {
  if (!user) {
    return '/sign-in';
  }

  // Handle additional redirects here
  if (user.role === UserRole.Admin) {
    return '/admin';
  }

  if (!user.isEmailVerified) {
    return '/email-verify';
  }

  if (!user.isOnboardingCompleted) {
    return '/onboarding';
  }

  return '/';
};

export default getAuthRedirect;
