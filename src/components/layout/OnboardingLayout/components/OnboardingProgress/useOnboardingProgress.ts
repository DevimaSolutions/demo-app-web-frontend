import { useMemo } from 'react';

import { SegmentProgressStatus } from '@/constants';
import { useSelector } from '@/hooks';
import { selectors } from '@/redux/onboarding';

const useOnboardingProgress = () => {
  const currentStep = useSelector(selectors.onboardingCurrentStep);

  const stepSettings = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => i + 1).map((ell) =>
        ell < currentStep
          ? SegmentProgressStatus.Done
          : ell == currentStep
          ? SegmentProgressStatus.InProgress
          : SegmentProgressStatus.NotStarted,
      ),
    [currentStep],
  );

  return { stepSettings };
};

export default useOnboardingProgress;
