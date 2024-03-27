import { createAsyncThunk } from '@reduxjs/toolkit';

import friendsService from '@/services/friends.service';
import { handleThunkApiError } from '@/utils';

import type { RootState } from '../store';
import type { IFullUserResponse, IPaginationResponse } from '@/data-transfer/responses';
import type { Action, AsyncThunkPayloadCreator } from '@reduxjs/toolkit';

export const getFriends = createAsyncThunk(
  'onboarding/getFriends',
  handleThunkApiError<undefined, IPaginationResponse<IFullUserResponse> | undefined>(
    async (_, thunkAPI?: Parameters<AsyncThunkPayloadCreator<Response, Action>>[1]) => {
      if (!thunkAPI) {
        return;
      }
      console.log(thunkAPI);
      const state = thunkAPI.getState() as RootState;
      const result = await friendsService.getFriends({
        page: state.friends.page,
        limit: state.friends.limit,
      });
      return result;
    },
    { showToast: true },
  ),
);
