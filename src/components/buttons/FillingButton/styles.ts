import { theme } from '@/constants';

const styles = {
  root: (progress: number) => ({
    zIndex: 1,
    overflow: 'hidden',
    ':before': {
      content: "''",
      position: 'absolute',
      background: theme.palette.primary.main,
      opacity: 0.2,
      bottom: 0,
      left: 0,
      right: `calc(${100 - progress}%)`,
      top: 0,
      zIndex: -1,
      transition: 'all 0.2s ease-in-out',
    },
  }),
} as const;

export default styles;
