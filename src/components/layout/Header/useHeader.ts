import { useRouter } from 'next/router';

import { signOut } from '@/utils';

const useHeader = () => {
  const router = useRouter();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  const handleSignOut = () => {
    signOut();
  };

  return {
    router,
    handleRedirect,
    handleSignOut,
  };
};

export default useHeader;
