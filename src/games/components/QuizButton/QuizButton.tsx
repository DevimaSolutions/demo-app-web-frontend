import { Button } from '@mui/material';

import styles from './styles';
import useQuizButton from './useQuizButton';

import type { IQuizButtonProps } from './types';

const QuizButton = ({ children, answer, ...props }: IQuizButtonProps) => {
  const { styleSettings, handleAnswer } = useQuizButton({ answer });
  return (
    <Button {...props} sx={styles.root(styleSettings)} onClick={handleAnswer}>
      {children}
    </Button>
  );
};

export default QuizButton;
