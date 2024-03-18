import { theme } from '@/constants';

const styles = {
  root: {
    borderRadius: 3.2,
    border: `1.5px solid ${theme.palette.common.white}`,
    background: 'rgba(255,255,255, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 5,
  },
} as const;

export default styles;
