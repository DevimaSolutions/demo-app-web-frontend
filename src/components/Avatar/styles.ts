import { circularProgressClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    borderRadius: '50%',
    width: 48,
    height: 48,
    position: 'relative',
  },
  progress: {
    [`& .${circularProgressClasses.svg}`]: {
      transform: 'rotate(145deg)',
      color: theme.palette.primary[900],
      strokeLinecap: 'round',
    },
  },
  avatar: {
    width: 48,
    height: 48,
    position: 'absolute',
    background: theme.palette.grey[100],
    color: theme.palette.primary[500],
    svg: {
      width: 40,
      height: 40,
      alignSelf: 'end',
    },
  },
  level: {
    borderRadius: '50%',
    width: 20,
    height: 19,
    position: 'absolute',
    bottom: -2,
    right: 0,
    background: theme.palette.text.primary,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: '12px',
    alignContent: 'center',
  },
  online: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    position: 'absolute',
    bottom: 0,
    right: 0,
    background: theme.palette.primary[900],
    border: `2px solid ${theme.palette.common.white}`,
  },
} as const;

export default styles;
