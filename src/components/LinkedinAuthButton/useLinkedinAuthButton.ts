import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { errorMessages } from '@/constants';
import { AuthTypeEnum } from '@/data-transfer/requests';
import { authorizationService } from '@/services';
import { getURLWithQueryParams, envUtil } from '@/utils';

const env = envUtil.getEnv();
const AUTHORIZATION_LINK = 'https://www.linkedin.com/oauth/v2/authorization';

export const useLinkedinAuthButton = () => {
  const [isLogging, setIsLogging] = useState(false);
  const [code, setCode] = useState<string | string[]>('');
  const router = useRouter();

  const LINKEDIN_URL = getURLWithQueryParams(AUTHORIZATION_LINK, {
    response_type: 'code',
    client_id: env.linkedinClientId,
    redirect_uri: env.linkedinRedirect,
    state: env.linkedinState,
    scope: env.linkedinScope,
  });

  const handleLinkedInError = useCallback(() => {
    router.replace('/sign-in', undefined, { shallow: true });
    toast.error(errorMessages.somethingWentWrong);
    setIsLogging(false);
    setCode('');
  }, [router]);

  const loginWithLinkedIn = () => router.push(LINKEDIN_URL);

  const authorizeWithLinkedIn = useCallback(
    (authCode: string | string[]) => {
      setIsLogging(true);
      authorizationService
        .authorizeWithSocial<AuthTypeEnum.LinkedIn>({
          payload: { code: authCode, redirect: env.linkedinRedirect },
          socialType: AuthTypeEnum.LinkedIn,
        })
        .catch(() => {
          handleLinkedInError();
        });
    },
    [handleLinkedInError],
  );

  useEffect(() => {
    if (router.query.error) {
      handleLinkedInError();
    }
    if (code) {
      authorizeWithLinkedIn(code);
    }
  }, [authorizeWithLinkedIn, code, handleLinkedInError, router.query.error]);

  useEffect(() => {
    if (router.query.code) setCode(router.query.code);
  }, [router.query.code]);

  return { loginWithLinkedIn, isLogging };
};

export default useLinkedinAuthButton;
