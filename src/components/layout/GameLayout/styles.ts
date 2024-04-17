import { theme } from '@/constants';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '& > main': {
      flexGrow: 1,
      background: theme.palette.grey[50],
    },
  },
  lifeSection: {
    position: 'fixed',
    top: 20,
    right: 20,
  },
} as const;
export default styles;
