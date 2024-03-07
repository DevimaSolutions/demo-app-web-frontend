import { theme } from '@/constants';

const styles = {
  root: {
    width: 714,
    height: 825,
    borderRadius: 2.5,
    border: `1px solid ${theme.palette.common.white}`,
    background: 'linear-gradient(120deg, rgba(255,255,255, 0.47), rgba(255,255,255, 0))',
    backdropFilter: 'blur(42px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 5,
  },
} as const;

export default styles;
