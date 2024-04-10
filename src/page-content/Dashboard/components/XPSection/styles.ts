import { linearProgressClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    background: theme.palette.common.white,
    borderRadius: 1.6,
    p: theme.spacing(2.5, 3),
    width: '100%',
  },
  mainInfo: {
    display: 'flex',
    mt: 0.5,
    width: '100%',
    justifyContent: 'space-between',
  },
  xpStats: {
    fontSize: 24,
    lineHeight: '24px',
    fontWeight: 600,
    ['span']: {
      fontSize: 16,
      opacity: 0.4,
    },
  },
  progressContainer: {
    width: '100%',
    p: theme.spacing(0.5, 0.625),
    background: '#886FFF1A',
    mt: 0.875,
    borderRadius: 1.6,
  },
  progress: {
    height: 24,
    borderRadius: 1.6,
    background: 'transparent',
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 1.6,
    },
  },
} as const;

export default styles;
