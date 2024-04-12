import { useRef, useState } from 'react';

import { useAuthContext } from '@/context';
import { profileService } from '@/services';
import { signOut } from '@/utils';

const useProfileModal = () => {
  const { user, isLoading } = useAuthContext();
  const [tabValue, setTabValue] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerAvatarUpload = () => {
    fileInputRef.current?.click();
  };

  const handleSignOut = () => {
    signOut();
  };

  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      profileService.uploadAvatar(file);
    }
  };

  return {
    user,
    isLoading,
    handleSignOut,
    tabValue,
    handleTabChange,
    fileInputRef,
    triggerAvatarUpload,
    handleAvatarUpload,
  };
};

export default useProfileModal;
