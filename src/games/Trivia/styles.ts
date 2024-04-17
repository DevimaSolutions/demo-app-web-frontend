import { alpha } from '@mui/material';

import { theme } from '@/constants';

export const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  questionNumber: {
    color: alpha(theme.palette.grey[600], 0.4),
  },
  question: {
    fontSize: 24,
    lineHeight: '24px',
    fontWeight: 600,
    mt: 2,
  },
  imageQuestionContainer: {
    width: 330,
    height: 280,
    position: 'relative',
    borderRadius: 3.2,
    overflow: 'hidden',
    mt: 3,
    ['img']: {
      objectFit: 'cover',
    },
  },
  answersBlock: {
    width: 350,
    p: 3,
    background: theme.palette.common.white,
    borderRadius: 3.2,
    mt: 5,
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },
  buttonsWrapper: {
    width: '100%',
    display: 'flex',
    gap: 1.5,
  },
  resultContainer: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loseGame: {
    color: theme.palette.error.main,
    fontSize: 36,
    lineHeight: '36px',
    fontWeight: 600,
  },
  winGame: {
    color: theme.palette.success.main,
    fontSize: 36,
    lineHeight: '36px',
    fontWeight: 600,
  },
} as const;

export default styles;
