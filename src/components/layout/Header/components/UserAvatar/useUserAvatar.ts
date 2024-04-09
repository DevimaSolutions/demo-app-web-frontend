import { useState } from 'react';

import { useAuthContext } from '@/context';
import { useSelector } from '@/hooks';
import { selectors } from '@/redux/profile';

export const useUserAvatar = () => {
  const { user, isLoading: isUserLoading } = useAuthContext();
  const { profile, isLoading } = useSelector(selectors.profileSelector);

  const [open, setOpen] = useState<string | null>('');

  const handleModalState = (modal?: string) => () => {
    setOpen(modal ?? null);
  };

  return {
    user,
    profile,
    isUserLoading,
    isLoading,
    open,
    handleModalState,
  };
};

export default useUserAvatar;
