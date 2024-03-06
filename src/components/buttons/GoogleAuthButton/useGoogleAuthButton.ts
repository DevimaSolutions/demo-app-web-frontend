import { useGoogleLogin } from '@react-oauth/google';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { errorMessages } from '@/constants';
import { AuthTypeEnum } from '@/data-transfer/requests/enums';
import { authorizationService } from '@/services';

import { onNonOAuthErrorMessages } from './constants';

const useGoogleAuthButton = () => {
  const [isLogging, setIsLogging] = useState(false);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      setIsLogging(true);
      authorizationService
        .authorizeWithSocial<AuthTypeEnum.Google>({
          payload: { token: tokenResponse.access_token },
          socialType: AuthTypeEnum.Google,
        })
        .catch((error) => {
          toast.error(error.message || errorMessages.somethingWentWrong);
          setIsLogging(false);
        });
    },
    onError: ({ error }) => toast.error(error || errorMessages.somethingWentWrong),
    onNonOAuthError: ({ type }) => toast.error(onNonOAuthErrorMessages[type]),
  });

  return { login, isLogging };
};

export default useGoogleAuthButton;
