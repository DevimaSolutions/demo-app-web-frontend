import { useState } from 'react';

import { useAuthContext } from '@/context';

export const useUserAvatar = () => {
  const { user, isLoading: isUserLoading } = useAuthContext();

  const [open, setOpen] = useState<string | null>('');

  const handleModalState = (modal?: string) => () => {
    setOpen(modal ?? null);
  };

  return {
    user,
    isUserLoading,
    open,
    handleModalState,
  };
};

export default useUserAvatar;
