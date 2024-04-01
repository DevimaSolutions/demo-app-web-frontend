import { createAsyncThunk } from '@reduxjs/toolkit';

import friendsService from '@/services/friends.service';
import { handleThunkApiError } from '@/utils';

import type { RootState } from '../store';
import type { IFullUserResponse, IPaginationResponse } from '@/data-transfer/responses';
import type { Action, AsyncThunkPayloadCreator } from '@reduxjs/toolkit';

export interface ISearch {
  search?: string;
}

export const getFriends = createAsyncThunk(
  'friends/getFriends',
  handleThunkApiError<ISearch, IPaginationResponse<IFullUserResponse> | undefined>(
    async (
      { search }: ISearch,
      thunkAPI?: Parameters<AsyncThunkPayloadCreator<Response, Action>>[1],
    ) => {
      if (!thunkAPI) {
        return;
      }
      const state = thunkAPI.getState() as RootState;
      const result = await friendsService.getFriends({
        page: state.friends.page,
        limit: state.friends.limit,
        search: search,
      });
      return result;
    },
    { showToast: true },
  ),
);
