import { theme } from '@/constants';

const styles = {
  root: {
    backgroundColor: '#F4F4F4',
    borderRadius: 2,
    p: 0.5,
    minHeight: 'unset',
    ['.Mui-selected']: {
      color: theme.palette.primaryDark[100],
    },
  },
  tab: {
    p: theme.spacing(0.95, 3.375),
    minHeight: 'unset',
    zIndex: 1,
    color: theme.palette.grey[600],
    fontSize: 14,
    fontWeight: 500,
  },
  indicator: {
    backgroundColor: theme.palette.common.white,
    height: 32,
    borderRadius: 1.6,
    width: '100%',
  } as const,
} as const;

export default styles;
