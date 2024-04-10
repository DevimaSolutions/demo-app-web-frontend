import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/hooks';
import { thunks, selectors } from '@/redux/onboarding';
import { prevStep } from '@/redux/onboarding/slice';

import type { UserProfileTypeEnum } from '@/data-transfer/requests';

const useSecondStep = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectors.onboardingDataSelector);

  const prev = () => dispatch(prevStep());

  const handleOptionClick = useCallback(
    (optionValue: UserProfileTypeEnum) => () => {
      dispatch(thunks.updateOnboardingData({ secondStep: { profileType: optionValue } }));
    },
    [dispatch],
  );
  return { prev, handleOptionClick, data };
};

export default useSecondStep;
