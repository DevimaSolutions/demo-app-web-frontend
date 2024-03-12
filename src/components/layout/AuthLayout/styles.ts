import { theme } from '@/constants';

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    bgcolor: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  children: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
} as const;
export default styles;
