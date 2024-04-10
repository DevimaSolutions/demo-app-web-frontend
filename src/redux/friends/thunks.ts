import { createAsyncThunk } from '@reduxjs/toolkit';

import friendsService from '@/services/friends.service';
import { handleThunkApiError } from '@/utils';

import type { RootState } from '../store';
import type { IFriendsPaginationQuery } from '@/data-transfer/queries';
import type { IFullUserResponse, IPaginationResponse } from '@/data-transfer/responses';

export const getFriends = createAsyncThunk(
  'friends/getFriends',
  handleThunkApiError<
    Pick<IFriendsPaginationQuery, 'search'>,
    IPaginationResponse<IFullUserResponse> | undefined
  >(
    async (params, thunkAPI) => {
      const state = thunkAPI?.getState() as RootState;
      const { page, limit } = state?.friends;
      const search = params.search;

      const result = await friendsService.getFriends({
        page,
        limit,
        search: search,
      });
      return result;
    },
    { showToast: true },
  ),
);
