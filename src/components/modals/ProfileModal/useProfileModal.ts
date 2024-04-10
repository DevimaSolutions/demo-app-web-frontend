import { useState } from 'react';

import { useSelector } from '@/hooks';
import { selectors } from '@/redux/profile';
import { signOut } from '@/utils';

const useProfileModal = () => {
  const { profile, isLoading } = useSelector(selectors.profileSelector);
  const [tabValue, setTabValue] = useState<number>(0);

  const handleSignOut = () => {
    signOut();
  };

  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  return { profile, isLoading, handleSignOut, tabValue, handleTabChange };
};

export default useProfileModal;
