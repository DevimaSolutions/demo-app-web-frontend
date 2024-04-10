import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { thunks, selectors } from '@/redux/onboarding';
import { prevStep } from '@/redux/onboarding/slice';

import type { UserLearningPaceEnum } from '@/data-transfer/requests';

const useThirdStep = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectors.onboardingDataSelector);

  const prev = () => dispatch(prevStep());

  const handleOptionClick = useCallback(
    (optionValue: UserLearningPaceEnum) => () => {
      dispatch(thunks.updateOnboardingData({ thirdStep: { learningPace: optionValue } }));
    },
    [dispatch],
  );
  return { prev, handleOptionClick, data };
};

export default useThirdStep;
