import { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { thunks, selectors } from '@/redux/onboarding';
import { resetState } from '@/redux/onboarding/slice';

import { Loading } from './components';
import { stepsMap } from './constants';

const useOnboarding = () => {
  const currentStep = useSelector(selectors.onboardingCurrentStep);
  const isLoading = useSelector(selectors.isInitialLoadingSelector);
  const dispatch = useDispatch();

  const component = useMemo(
    () => (isLoading ? Loading : stepsMap[currentStep]),
    [currentStep, isLoading],
  );

  useEffect(() => {
    dispatch(thunks.getOnboardingData({}));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return { component };
};

export default useOnboarding;
