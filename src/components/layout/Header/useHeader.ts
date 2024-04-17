import { useRouter } from 'next/router';

import { signOut } from '@/utils';

const useHeader = () => {
  const router = useRouter();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  const handleSignOut = () => {
    signOut();
  };

  const checkIsSelected = (pathname: string) => router.pathname === pathname;

  return {
    handleRedirect,
    handleSignOut,
    checkIsSelected,
  };
};

export default useHeader;
