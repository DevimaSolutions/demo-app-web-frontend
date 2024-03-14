import { createSlice } from '@reduxjs/toolkit';

import type IOnboardingState from './types';

const initialState: IOnboardingState = {
  currentStep: 1,
};

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    resetState(state) {
      state.currentStep = 1;
    },
    nextStep(state) {
      if (state.currentStep < 4) {
        state.currentStep += 1;
      }
    },
    prevStep(state) {
      if (state.currentStep > 1) {
        state.currentStep -= 1;
      }
    },
  },
});

export const { resetState, nextStep, prevStep } = onboardingSlice.actions;

export default onboardingSlice.reducer;
