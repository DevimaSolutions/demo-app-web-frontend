import { theme } from '@/constants';

const styles = {
  root: {
    width: 319,
    height: 319,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary[900],
    borderRadius: 0.8,
    position: 'relative',
    overflow: 'hidden',
    ['& > *']: {
      zIndex: 2,
    },
    [':after']: {
      content: "''",
      width: 795,
      height: 332,
      background: '#161419',
      position: 'absolute',
      borderRadius: '50%',
      top: 190,
      transform: 'rotate(-23deg)',
      opacity: '0.6',
      filter: 'blur(400px)',
    },
  },
} as const;

export default styles;
