import { createAsyncThunk } from '@reduxjs/toolkit';

import { profileService } from '@/services';
import { handleThunkApiError } from '@/utils';

export const getProfile = createAsyncThunk(
  'profile/getProfile',
  handleThunkApiError(profileService.getProfile),
);

export const updateProfile = createAsyncThunk(
  'profile/updateProfile',
  handleThunkApiError(profileService.updateProfile),
);
