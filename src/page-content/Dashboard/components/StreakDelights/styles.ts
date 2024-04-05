import { theme } from '@/constants';

const styles = {
  root: {
    background: theme.palette.common.white,
    borderRadius: 1.6,
    width: '100%',
    p: '12px 11px 8px 8px',
  },
  title: {
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 500,
    ml: 2,
  },
  streakContainer: {
    mt: 1.5,
    width: '100%',
    background: theme.palette.grey[400],
    borderRadius: 0.8,
    py: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1.5,
  },
} as const;

export default styles;
