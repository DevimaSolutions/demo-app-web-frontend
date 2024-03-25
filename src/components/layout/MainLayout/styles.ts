import { theme } from '@/constants';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    '& > main': {
      flexGrow: 1,
      pl: '96px',
      background: theme.palette.grey[50],
    },
  },
} as const;
export default styles;
