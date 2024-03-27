import type { IUserResponse } from '@/data-transfer/responses';
import type { ISignInParams } from '@/types';
import type { IAuthManager } from '@devimasolutions/auth';

const getCurrentAuthData = (auth: IAuthManager<IUserResponse, ISignInParams>) => {
  const isSignedIn = auth.isSignedIn();
  return {
    user: isSignedIn ? auth.getUser() : null,
    accessToken: isSignedIn ? auth.getAccessToken() : null,
    refreshToken: isSignedIn ? auth.getRefreshToken() : null,
    isSignedIn: isSignedIn,
  };
};

export default getCurrentAuthData;
