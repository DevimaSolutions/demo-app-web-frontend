import { useSelector } from '@/hooks';
import { profileSelector } from '@/redux/profile/selectors';

const useAccountDetails = () => {
  const { profile, isLoading } = useSelector(profileSelector);

  return { profile, isLoading };
};

export default useAccountDetails;
