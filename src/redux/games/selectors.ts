import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';

export const gameStateSelector = ({ game }: RootState) => game;

export const gameUserSelector = createSelector(gameStateSelector, ({ user }) => user);

export const gameContentSelector = createSelector(gameStateSelector, ({ game }) => game);

export const isGameDataLoadingSelector = createSelector(
  gameStateSelector,
  ({ isLoading }) => isLoading,
);
