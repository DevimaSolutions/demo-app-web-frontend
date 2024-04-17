import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gameContentSelector, gameUserSelector } from '@/redux/games/selectors';
import { handleWrongAnswer, nextQuestion } from '@/redux/games/slice';

import { quizButtonStyleSettings } from './constants';
import { QuizButtonAnswerStatus } from './enums';

import type { IUseQuizButtonAnswer } from './types';

const useQuizButton = ({ answer }: IUseQuizButtonAnswer) => {
  const gameInfo = useSelector(gameContentSelector);
  const userGameInfo = useSelector(gameUserSelector);
  const dispatch = useDispatch();
  const [answerStatus, setAnswerStatus] = useState<QuizButtonAnswerStatus>(
    QuizButtonAnswerStatus.Neutral,
  );
  const styleSettings = quizButtonStyleSettings[answerStatus];

  const handleAnswer = () => {
    if (answer === gameInfo.questions[userGameInfo.currentQuestion].correctAnswer) {
      setAnswerStatus(QuizButtonAnswerStatus.Correct);
    } else {
      setAnswerStatus(QuizButtonAnswerStatus.Incorrect);
      dispatch(handleWrongAnswer());
    }
    setTimeout(() => {
      dispatch(nextQuestion());
      setAnswerStatus(QuizButtonAnswerStatus.Neutral);
    }, 3000);
  };

  return {
    answerStatus,
    handleAnswer,
    styleSettings,
  };
};

export default useQuizButton;
