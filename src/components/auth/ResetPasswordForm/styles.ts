import { theme } from '@/constants';

const styles = {
  container: {
    width: 408,
    marginTop: 2,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
  },
  toastWrapper: {
    width: 2.5,
    height: 2.5,
    padding: theme.spacing(0.25, 0.5),
  },
} as const;

export default styles;
