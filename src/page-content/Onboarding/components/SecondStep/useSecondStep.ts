import { useCallback } from 'react';

import { useDispatch } from '@/hooks';
import { prevStep } from '@/redux/onboarding/slice';
import { updateOnboardingData } from '@/redux/onboarding/thunk';

import type { UserProfileTypeEnum } from '@/data-transfer/requests';

const useSecondStep = () => {
  const dispatch = useDispatch();

  const prev = () => dispatch(prevStep());

  const handleOptionClick = useCallback(
    (optionValue: UserProfileTypeEnum) => () => {
      dispatch(updateOnboardingData({ secondStep: { profileType: optionValue } }));
    },
    [dispatch],
  );
  return { prev, handleOptionClick };
};

export default useSecondStep;
