import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { useDispatch } from '@/hooks';
import {
  gameContentSelector,
  gameUserSelector,
  isGameDataLoadingSelector,
} from '@/redux/games/selectors';
import { loadGame } from '@/redux/games/slice';

import { fakeGameData } from './constants';

const useTrivia = () => {
  const gameContent = useSelector(gameContentSelector);
  const userGameStats = useSelector(gameUserSelector);
  const isGameLoading = useSelector(isGameDataLoadingSelector);
  const dispatch = useDispatch();

  const currentQuestion = useMemo(
    () => gameContent.questions[userGameStats.currentQuestion],
    [gameContent.questions, userGameStats.currentQuestion],
  );

  const questionInfo = useMemo(
    () => ({
      questionsAmount: gameContent.questions.length,
      currentQuestion: userGameStats.currentQuestion + 1,
    }),
    [gameContent.questions.length, userGameStats.currentQuestion],
  );

  const isGameOver = useMemo(() => !userGameStats.lifeCount, [userGameStats.lifeCount]);

  const isWinner = useMemo(
    () => userGameStats.currentQuestion === gameContent.questions.length && !isGameOver,
    [gameContent.questions.length, isGameOver, userGameStats.currentQuestion],
  );
  useEffect(() => {
    dispatch(loadGame(fakeGameData));
  }, [dispatch]);

  return { currentQuestion, isGameLoading, questionInfo, isWinner, isGameOver };
};

export default useTrivia;
