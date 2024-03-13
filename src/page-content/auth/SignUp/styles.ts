import { theme } from '@/constants';

const styles = {
  root: {
    width: 456,
    height: 'auto',
    padding: 3,
    gap: 3,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 3,
    margin: theme.spacing(1.25, 0),
  },
  titleIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '32px',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '0 42px',
    gap: '8px',
  },
  socialsWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  },
  buttonWrapper: {
    display: 'flex',
    gap: '12px',
    width: '100%',
  },
  bottomLinks: {
    display: 'flex',
    gap: '4px',
  },
} as const;

export default styles;
