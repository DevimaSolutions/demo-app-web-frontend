import { useSelector } from '@/hooks';
import { profileSelector } from '@/redux/profile/selectors';
import { signOut } from '@/utils';

const useProfileModal = () => {
  const { profile, isLoading } = useSelector(profileSelector);

  const handleSignOut = () => {
    signOut();
  };

  return { profile, isLoading, handleSignOut };
};

export default useProfileModal;
