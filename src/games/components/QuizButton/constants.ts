import { alpha } from '@mui/material';

import { theme } from '@/constants';

import { QuizButtonAnswerStatus } from './enums';

import type { IQuizButtonStyleSettings } from './types';

export const quizButtonStyleSettings: Record<QuizButtonAnswerStatus, IQuizButtonStyleSettings> = {
  [QuizButtonAnswerStatus.Neutral]: {
    background: theme.palette.grey[400],
    outlineColor: 'transparent',
    borderColor: 'transparent',
  },
  [QuizButtonAnswerStatus.Correct]: {
    background: theme.palette.grey[400],
    outlineColor: alpha(theme.palette.success[500], 0.2),
    borderColor: theme.palette.success[500],
  },
  [QuizButtonAnswerStatus.Incorrect]: {
    background: theme.palette.grey[400],
    outlineColor: alpha(theme.palette.common.rubies, 0.2),
    borderColor: theme.palette.common.rubies,
  },
};
