import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import image from '@/public/assets/drigBasedBackground.png';

import { QuizButton } from '../components';

import styles from './styles';
import useTrivia from './useTrivia';

const Trivia = () => {
  const { currentQuestion, questionInfo, isGameLoading, isWinner, isGameOver } = useTrivia();

  if (isWinner) {
    return (
      <Box sx={styles.resultContainer}>
        <Typography sx={styles.winGame}>You Win!</Typography>
      </Box>
    );
  }

  if (isGameOver) {
    return (
      <Box sx={styles.resultContainer}>
        <Typography sx={styles.loseGame}>You Lose!</Typography>
      </Box>
    );
  }

  if (isGameLoading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Box sx={styles.container}>
      <Box sx={styles.wrapper}>
        <Typography sx={styles.questionNumber}>
          Question {questionInfo.currentQuestion} of {questionInfo.questionsAmount}
        </Typography>
        <Typography sx={styles.question}>{currentQuestion.question}</Typography>
        <Box sx={styles.imageQuestionContainer}>
          <Image src={image} fill alt="Image" />
        </Box>
        <Box sx={styles.answersBlock}>
          <Box sx={styles.buttonsWrapper}>
            {currentQuestion.answers.slice(0, 2).map((answer, idx) => (
              <QuizButton answer={answer} fullWidth key={idx}>
                {answer}
              </QuizButton>
            ))}
          </Box>
          <Box sx={styles.buttonsWrapper}>
            {currentQuestion.answers.slice(2, 4).map((answer, idx) => (
              <QuizButton answer={answer} fullWidth key={idx}>
                {answer}
              </QuizButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Trivia;
