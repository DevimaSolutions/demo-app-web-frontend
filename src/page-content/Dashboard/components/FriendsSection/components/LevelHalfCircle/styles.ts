import { circularProgressClasses, typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    width: 48,
    height: 28,
    position: 'relative',
    display: 'inline-flex',
    overflow: 'hidden',
    flexShrink: 0,
  },
  progress: {
    [`& .${circularProgressClasses.svg}`]: {
      transform: 'rotate(-90deg) translate(-2px,-2px)',
      color: theme.palette.primary[900],
      strokeLinecap: 'round',
    },
  },
  progressBg: {
    position: 'absolute',
    left: 0,
    [`& .${circularProgressClasses.svg}`]: {
      transform: 'rotate(-90deg)',
      color: theme.palette.grey[400],
      strokeLinecap: 'round',
    },
  },
  level: {
    width: '100%',
    position: 'absolute',
    bottom: 1,
    left: 0,
    textAlign: 'center',
    [`&.${typographyClasses.root}`]: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '12px',
    },
  },
} as const;

export default styles;
