import { theme } from '@/constants';

const styles = {
  root: {
    width: '100%',
    height: 8,
    bgcolor: theme.palette.primary[100],
    borderRadius: 0.4,
    position: 'relative',
  },
  innerProgress: (offset: string) => ({
    position: 'absolute',
    top: 2,
    left: 2,
    bottom: 2,
    right: offset,
    background: theme.palette.primary[900],
    borderRadius: 0.4,
    transition: 'all 0.5s ease-in-out',
    transitionDelay: offset == '85%' ? '0.5s' : 0,
  }),
} as const;
export default styles;
