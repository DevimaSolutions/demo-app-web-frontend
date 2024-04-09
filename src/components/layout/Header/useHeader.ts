import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useDispatch } from '@/hooks';
import { getProfile } from '@/redux/profile/thunk';
import { signOut } from '@/utils';

const useHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    dispatch(getProfile({})).unwrap();
  }, [dispatch]);

  return {
    router,
    handleRedirect,
    handleSignOut,
  };
};

export default useHeader;
