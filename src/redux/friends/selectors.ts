import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';

export const friendsStateSelector = ({ friends }: RootState) => friends;

export const isLoadingSelector = createSelector(friendsStateSelector, (state) => state.isLoading);

export const friendsSelector = createSelector(friendsStateSelector, (state) => state.friends);
