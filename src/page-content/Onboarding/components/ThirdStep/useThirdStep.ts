import { useCallback } from 'react';

import { useDispatch } from '@/hooks';
import { prevStep } from '@/redux/onboarding/slice';
import { updateOnboardingData } from '@/redux/onboarding/thunk';

import type { UserLearningPaceEnum } from '@/data-transfer/requests';

const useThirdStep = () => {
  const dispatch = useDispatch();

  const prev = () => dispatch(prevStep());

  const handleOptionClick = useCallback(
    (optionValue: UserLearningPaceEnum) => () => {
      dispatch(updateOnboardingData({ thirdStep: { learningPace: optionValue } }));
    },
    [dispatch],
  );
  return { prev, handleOptionClick };
};

export default useThirdStep;
