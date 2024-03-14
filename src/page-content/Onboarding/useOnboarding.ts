import { useMemo } from 'react';

import { useSelector } from '@/hooks';
import { onboardingCurrentStep } from '@/redux/onboarding/selectors';

import { stepsMap } from './constants';

const useOnboarding = () => {
  const currentStep = useSelector(onboardingCurrentStep);

  const component = useMemo(() => stepsMap[currentStep], [currentStep]);

  return { component };
};

export default useOnboarding;
