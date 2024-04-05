import { useState } from 'react';

import { useAuthContext } from '@/context';
import { signOut } from '@/utils';

export const useAuthPopup = () => {
  const { user, isLoading } = useAuthContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const onOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onCloseMenu = () => {
    setAnchorEl(null);
  };

  const onSignOut = () => {
    signOut();
    onCloseMenu();
  };

  return {
    user,
    isLoading,
    anchorEl,
    onOpenMenu,
    onCloseMenu,
    onSignOut,
  };
};

export default useAuthPopup;
