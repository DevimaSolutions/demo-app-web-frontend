import { useSelector } from '@/hooks';
import { isInitialLoadingSelector } from '@/redux/onboarding/selectors';

const useOnboardingLayout = () => {
  const isLoading = useSelector(isInitialLoadingSelector);

  return { isLoading };
};

export default useOnboardingLayout;
