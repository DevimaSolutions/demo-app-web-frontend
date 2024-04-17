import { createSlice } from '@reduxjs/toolkit';

import type IGamesState from './types';

const initialState: IGamesState = {
  isLoading: true,
  user: {
    lifeCount: 3,
    maxLife: 3,
    currentQuestion: 0,
  },
  game: {
    level: 1,
    questions: [],
  },
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    resetState: () => initialState,
    loadGame: (state, action) => {
      const { level, questions } = action.payload;
      state.game.level = level;
      state.game.questions = questions;
      state.isLoading = false;
    },
    nextQuestion: (state) => {
      state.user.currentQuestion += 1;
    },
    handleWrongAnswer: (state) => {
      state.user.lifeCount -= 1;
    },
  },
});

export const { resetState, loadGame, nextQuestion, handleWrongAnswer } = gamesSlice.actions;

export default gamesSlice.reducer;
