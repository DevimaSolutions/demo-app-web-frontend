import { iconButtonClasses, typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    width: 128,
    height: 32,
    padding: 0.5,
    borderRadius: 0.8,
    background: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
    [`& .${typographyClasses.root}`]: {
      fontWeight: 600,
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  rubiesContainer: {
    width: 24,
    height: 24,
    padding: theme.spacing(0.75, 0.625),
    borderRadius: theme.spacing(0.75, 0.25, 0.25, 0.75),
    background: theme.palette.common.rubies,
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    svg: {
      width: 14,
      height: 13,
    },
  },
  dataContainer: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [`& .${iconButtonClasses.root}`]: {
      width: 24,
      height: 24,
      background: theme.palette.primary[900],
      borderRadius: theme.spacing(0.25, 0.75, 0.75, 0.25),
      color: theme.palette.common.white,
      svg: {
        width: 12,
        height: 12,
      },
    },
  },
} as const;

export default styles;
