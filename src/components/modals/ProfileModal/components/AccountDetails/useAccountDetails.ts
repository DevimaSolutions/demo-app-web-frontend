import { useSelector } from '@/hooks';
import { selectors } from '@/redux/profile';

const useAccountDetails = () => {
  const { profile, isLoading } = useSelector(selectors.profileSelector);

  return { profile, isLoading };
};

export default useAccountDetails;
