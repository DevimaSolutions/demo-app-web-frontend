import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { updateOnboardingData } from '@/redux/onboarding';
import { onboardingDataSelector } from '@/redux/onboarding/selectors';
import { prevStep } from '@/redux/onboarding/slice';

import type { UserProfileTypeEnum } from '@/data-transfer/requests';

const useSecondStep = () => {
  const dispatch = useDispatch();
  const data = useSelector(onboardingDataSelector);

  const prev = () => dispatch(prevStep());

  const handleOptionClick = useCallback(
    (optionValue: UserProfileTypeEnum) => () => {
      dispatch(updateOnboardingData({ secondStep: { profileType: optionValue } }));
    },
    [dispatch],
  );
  return { prev, handleOptionClick, data };
};

export default useSecondStep;
