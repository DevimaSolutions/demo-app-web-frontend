import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useDispatch } from '@/hooks';
import { thunks } from '@/redux/profile';
import { signOut } from '@/utils';

const useHeader = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleRedirect = (redirectUrl: string) => () => router.push(redirectUrl);

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    dispatch(thunks.getProfile());
  }, [dispatch]);

  return {
    router,
    handleRedirect,
    handleSignOut,
  };
};

export default useHeader;
