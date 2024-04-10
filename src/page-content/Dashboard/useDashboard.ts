import { useSelector } from '@/hooks';
import { selectors } from '@/redux/profile';

const useDashboard = () => {
  const { profile } = useSelector(selectors.profileSelector);
  return { profile };
};

export default useDashboard;
