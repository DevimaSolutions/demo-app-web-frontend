import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';

export const onboardingStateSelector = ({ onboarding }: RootState) => onboarding;

export const onboardingCurrentStep = createSelector(
  onboardingStateSelector,
  (state) => state.currentStep,
);
