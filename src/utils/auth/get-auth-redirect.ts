import { UserRole, UserStatus } from '@/constants';

import type { IFullUserResponse } from '@/data-transfer/responses';

const getAuthRedirect = (user?: IFullUserResponse | null) => {
  if (!user) {
    return '/sign-in';
  }

  // Handle additional redirects here
  if (user.role === UserRole.Admin) {
    return '/admin';
  }

  if (user.status === UserStatus.Pending) {
    return '/email-verify';
  }

  if (user.status === UserStatus.Verified) {
    return '/onboarding';
  }

  return '/';
};

export default getAuthRedirect;
