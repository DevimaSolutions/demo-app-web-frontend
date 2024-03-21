import { theme } from '@/constants';

const styles = {
  root: {
    background: theme.palette.primary['50'],
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 5,
    px: 2,
  },
  appLogo: {
    width: 96,
    height: 96,
  },
  marketsContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 3,
  },
  googlePlay: {
    transform: 'scale(1.1)',
  },
  text: {
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 500,
    textAlign: 'center',
  },
} as const;

export default styles;
