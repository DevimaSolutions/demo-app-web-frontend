import { useState } from 'react';

import { useSelector } from '@/hooks';
import { profileSelector } from '@/redux/profile/selectors';
import { signOut } from '@/utils';

const useProfileModal = () => {
  const { profile, isLoading } = useSelector(profileSelector);
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
