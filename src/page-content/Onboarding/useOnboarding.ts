import { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { getOnboardingData } from '@/redux/onboarding';
import { onboardingCurrentStep, isInitialLoadingSelector } from '@/redux/onboarding/selectors';
import { resetState } from '@/redux/onboarding/slice';

import { Loading } from './components';
import { stepsMap } from './constants';

const useOnboarding = () => {
  const currentStep = useSelector(onboardingCurrentStep);
  const isLoading = useSelector(isInitialLoadingSelector);
  const dispatch = useDispatch();

  const component = useMemo(
    () => (isLoading ? Loading : stepsMap[currentStep]),
    [currentStep, isLoading],
  );

  useEffect(() => {
    dispatch(getOnboardingData({}));
    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return { component };
};

export default useOnboarding;
