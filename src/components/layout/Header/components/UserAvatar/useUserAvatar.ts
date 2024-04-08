import { useState } from 'react';

import { useAuthContext } from '@/context';

export const useUserAvatar = () => {
  const { user, isLoading } = useAuthContext();

  const [open, setOpen] = useState<boolean>(false);

  const onOpenProfileModal = () => {
    setOpen(true);
  };

  const onCloseProfileModal = () => {
    setOpen(false);
  };

  return {
    user,
    isLoading,
    open,
    onOpenProfileModal,
    onCloseProfileModal,
  };
};

export default useUserAvatar;
