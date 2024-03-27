import { createSlice } from '@reduxjs/toolkit';

import { getFriends } from './thunk';

import type IFriendsState from './types';

const initialState: IFriendsState = {
  friends: [],
  isLoading: false,
  page: 1,
  limit: 10,
  hasMore: true,
  total: 0,
  search: '',
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getFriends.fulfilled, (state, { payload }) => {
      if (!payload) {
        return;
      }
      if (payload.items.length) {
        const existingFriendsIdSet = new Set(state.friends.map((item) => item.id));
        state.friends.push(...payload.items.filter((item) => !existingFriendsIdSet.has(item.id)));
      } else {
        state.friends = payload.items;
      }
      state.hasMore = payload.hasMore;
      state.page = payload.hasMore ? payload.page + 1 : state.page;
      state.total = payload.total;
      state.isLoading = false;
    });
    builder.addCase(getFriends.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFriends.rejected, (state) => {
      state.isLoading = false;
      state.page = 1;
      state.limit = 10;
      state.hasMore = false;
      state.total = 0;
    });
  },
});

export const { resetState } = friendsSlice.actions;

export default friendsSlice.reducer;
