import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '@/redux/store';

export const profileStateSelector = ({ profile }: RootState) => profile;

export const profileSelector = createSelector(profileStateSelector, ({ profile, isLoading }) => ({
  profile,
  isLoading,
}));
