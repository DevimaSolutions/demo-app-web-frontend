import { useSelector } from '@/hooks';
import { selectors } from '@/redux/onboarding';

const useOnboardingLayout = () => {
  const isLoading = useSelector(selectors.isInitialLoadingSelector);

  return { isLoading };
};

export default useOnboardingLayout;
