import { alpha, tabClasses, tabsClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    backgroundColor: theme.palette.grey[400],
    borderRadius: 2,
    p: 0.5,
    minHeight: 'unset',

    [`& .${tabsClasses.flexContainer}`]: {
      border: 'none',
    },
  },
  tab: (disabled?: boolean) => ({
    [`&.${tabClasses.root}`]: {
      p: theme.spacing(0.75, 3.375),
      minHeight: 'unset',
      zIndex: 1,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
      color: disabled ? alpha(theme.palette.grey[600], 0.4) : theme.palette.grey[600],
    },
    [`&.${tabClasses.root}.Mui-selected`]: {
      color: theme.palette.primaryDark[100],
    },
  }),
  indicator: {
    backgroundColor: theme.palette.common.white,
    height: 32,
    borderRadius: 1.6,
    width: '100%',
  } as const,
} as const;

export default styles;
