import { useEffect, useMemo, useState } from 'react';

import { authorizationService } from '@/services';
import { signOut } from '@/utils';

import type { IVerifySettings } from './types';

const useVerifyEmail = () => {
  const [seconds, setSeconds] = useState(60);
  const [settings, setSettings] = useState<IVerifySettings>({
    isLoading: false,
    isError: false,
  });

  const handleFocus = () => {
    setSettings({ ...settings, isError: false });
  };

  const sendCode = (code: string) => {
    setSettings({ ...settings, isLoading: true });
    authorizationService
      .confirmEmail(code)
      .catch(() => setSettings({ isLoading: false, isError: true }));
  };

  useEffect(() => {
    if (Boolean(seconds)) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [seconds]);

  const resendEmail = () => {
    authorizationService.resendEmailVerification().then(() => {
      setSeconds(60);
    });
  };

  const backToLogIn = () => {
    signOut();
  };

  const resendProgress = useMemo(() => 60 - seconds, [seconds]);

  return { sendCode, handleFocus, settings, resendEmail, resendProgress, seconds, backToLogIn };
};

export default useVerifyEmail;
