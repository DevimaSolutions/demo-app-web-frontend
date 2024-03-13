import { theme } from '@/constants';

const styles = {
  container: {
    minHeight: '100vh',
    width: '100%',
    bgcolor: theme.palette.primary[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  children: {
    zIndex: 2,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
} as const;
export default styles;
