import { PageAuthSettingsContextProvider } from '@/context';
import { useAuthContext } from '@/context/auth';
import { useUserPresence } from '@/hooks';

import useAuthGate from './useAuthGates';

import type { IAuthInitialProps } from '@/types';
import type { PropsWithChildren } from 'react';

const AuthGate = ({
  children,
  auth: authSettings,
}: PropsWithChildren<{ auth?: IAuthInitialProps }>) => {
  const auth = useAuthContext();
  const { ensureAuthSettings, isAvailable } = useAuthGate(auth, authSettings);

  useUserPresence(auth.user?.id || '');

  if (!isAvailable) {
    return null;
  }

  return (
    <PageAuthSettingsContextProvider value={ensureAuthSettings}>
      {children}
    </PageAuthSettingsContextProvider>
  );
};

export default AuthGate;
