import { theme } from '@/constants';

const styles = {
  root: {
    width: '100%',
    borderRadius: 1.6,
    background: theme.palette.primary[200],
    border: '2.5px solid #EBB62F',
    position: 'relative',
    height: 107,
    [':after']: {
      content: "'ELITE+'",
      position: 'absolute',
      right: -7,
      color: theme.palette.common.white,
      transform: 'rotate(90deg) translate(-10px, 0)',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '18px',
      letterSpacing: '3%',
      top: '50%',
    },
  },
  content: {
    position: 'absolute',
    borderRadius: 1.6,
    top: -2.5,
    left: -2.5,
    bottom: -2.5,
    right: 32,
    background: theme.palette.common.white,
    p: theme.spacing(2.25, 3),
  },
  title: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: '17px',
  },
  coinsBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mt: 1.5,
  },
  coinsContainer: {
    background: '#FFB8001A',
    display: 'flex',
    alignItems: 'center',
    gap: 0.25,
    padding: theme.spacing(1, 1.5),
    borderRadius: '4px 18px 18px 4px',
    color: '#EBA900',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '20px',
    width: '100%',
  },
  rubinsContainer: {
    background: '#FF3F571A',
    display: 'flex',
    alignItems: 'center',
    gap: 0.25,
    padding: '8px 8px 8px 12px',
    borderRadius: '18px 4px 4px 18px',
    color: '#FF3F57',
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '20px',
  },
} as const;

export default styles;