import { theme } from '@/constants';

const styles = {
  root: {
    background: theme.palette.common.white,
    p: 3,
    borderRadius: 1.6,
  },
  title: {
    fontSize: 24,
    lineHeight: '24px',
    fontWeight: 600,
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skillProgressContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 2.5,
    mt: 2.5,
  },
} as const;

export default styles;
