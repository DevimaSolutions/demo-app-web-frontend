import { useRouter } from 'next/router';

import { getAuthManager } from '@/utils';

const useHeader = () => {
  const router = useRouter();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  const handleSignOut = () => {
    getAuthManager().then((auth) => auth.signOut());
  };

  return {
    router,
    handleRedirect,
    handleSignOut,
  };
};

export default useHeader;
