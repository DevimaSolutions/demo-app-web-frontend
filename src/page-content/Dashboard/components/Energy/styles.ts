import { theme } from '@/constants';

const styles = {
  root: {
    background: theme.palette.common.white,
    borderRadius: 1.6,
    p: theme.spacing(2.5, 3),
  },
  title: {
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 400,
    opacity: 0.4,
  },
  dataSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 0.5,
  },
  energyBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    fontSize: 24,
    lineHeight: '24px',
    fontWeight: 600,
  },
  time: {
    fontSize: 16,
    lineHeight: '24px',
    fontWeight: 500,
    opacity: 0.4,
  },
  progressSection: {
    mt: 1,
    p: theme.spacing(0.5, 0.625),
    background: theme.palette.grey[400],
    borderRadius: 1.6,
    gap: 0.5,
    width: '100%',
    display: 'flex',
  },
} as const;

export default styles;
