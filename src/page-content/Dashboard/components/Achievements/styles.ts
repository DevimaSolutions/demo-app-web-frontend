import { alpha } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    background: theme.palette.common.white,
    p: theme.spacing(3, 1, 1, 1),
    borderRadius: 1.6,
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 2,
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },
  title: {
    fontSize: 24,
    lineHeight: '24px',
    fontWeight: 600,
  },
  achievementsCount: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 600,
    opacity: 0.4,
    ['span']: {
      fontSize: 24,
      lineHeight: '24px',
    },
  },
  seeAllButton: {
    p: theme.spacing(0.5, 1.5, 0.625),
    letterSpacing: 1,
    fontWeight: 700,
    borderRadius: 1.2,
    fontSize: 12,
    lineHeight: '15px',
  },
  achievementsBox: {
    mt: 2,
    width: '100%',
    background: alpha(theme.palette.primary[700], 0.1),
    borderRadius: theme.spacing(0.5, 0.5, 1, 1),
    p: 2,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
} as const;

export default styles;
