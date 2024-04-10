import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { updateOnboardingData } from '@/redux/onboarding';
import { onboardingDataSelector } from '@/redux/onboarding/selectors';
import { prevStep } from '@/redux/onboarding/slice';

import type { UserLearningPaceEnum } from '@/data-transfer/requests';

const useThirdStep = () => {
  const dispatch = useDispatch();
  const data = useSelector(onboardingDataSelector);

  const prev = () => dispatch(prevStep());

  const handleOptionClick = useCallback(
    (optionValue: UserLearningPaceEnum) => () => {
      dispatch(updateOnboardingData({ thirdStep: { learningPace: optionValue } }));
    },
    [dispatch],
  );
  return { prev, handleOptionClick, data };
};

export default useThirdStep;
