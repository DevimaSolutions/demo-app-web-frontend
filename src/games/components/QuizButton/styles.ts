import { theme } from '@/constants';

import type { IQuizButtonStyleSettings } from './types';

export const styles = {
  root: (settings: IQuizButtonStyleSettings) => ({
    py: 1.75,
    color: theme.palette.grey[600],
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 500,
    background: settings.background,
    border: settings.borderColor ? `1.5px solid ${settings.borderColor}` : 'none',
    outline: settings.outlineColor ? `1.5px solid ${settings.outlineColor}` : 'none',
    ['&:hover']: {
      background: theme.palette.grey[200],
    },
  }),
} as const;

export default styles;
