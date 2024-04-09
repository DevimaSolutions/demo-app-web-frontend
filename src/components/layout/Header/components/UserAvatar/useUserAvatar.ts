import { useState } from 'react';

import { useAuthContext } from '@/context';
import { useSelector } from '@/hooks';
import { profileSelector } from '@/redux/profile/selectors';

export const useUserAvatar = () => {
  const { user, isLoading: isUserLoading } = useAuthContext();
  const { profile, isLoading } = useSelector(profileSelector);

  const [open, setOpen] = useState<boolean>(false);

  const onOpenProfileModal = () => {
    setOpen(true);
  };

  const onCloseProfileModal = () => {
    setOpen(false);
  };

  return {
    user,
    profile,
    isUserLoading,
    isLoading,
    open,
    onOpenProfileModal,
    onCloseProfileModal,
  };
};

export default useUserAvatar;
