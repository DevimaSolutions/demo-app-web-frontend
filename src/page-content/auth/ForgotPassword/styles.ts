import { theme } from '@/constants';

const styles = {
  root: {
    width: 456,
    height: 'auto',
    gap: 3,
    padding: 3,
    margin: theme.spacing(1.25, 0),
  },
  titleIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 4,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(0, 5.25),
    gap: 1,
  },
} as const;

export default styles;
