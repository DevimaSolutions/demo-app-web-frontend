import { createSlice } from '@reduxjs/toolkit';

import { getProfile } from './thunks';

import type IProfileState from './types';

const initialState: IProfileState = {
  profile: {
    name: '',
    email: '',
    phoneNumber: '',
    username: '',
    level: 0,
    experience: 0,
    avatar: undefined,
  },
  isLoading: false,
};

export const profileService = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
      state.isLoading = false;
    });
    builder.addCase(getProfile.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { resetState } = profileService.actions;

export default profileService.reducer;
