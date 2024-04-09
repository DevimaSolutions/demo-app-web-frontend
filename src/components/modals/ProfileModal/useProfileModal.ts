import { useSelector } from '@/hooks';
import { profileSelector } from '@/redux/profile/selectors';
import { getAuthManager } from '@/utils';

const useProfileModal = () => {
  const { profile, isLoading } = useSelector(profileSelector);

  const handleSignOut = () => {
    console.log('sign out');
    getAuthManager().then((auth) => auth.signOut());
  };

  return { profile, isLoading, handleSignOut };
};

export default useProfileModal;
