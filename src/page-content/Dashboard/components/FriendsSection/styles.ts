import { alpha, typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(2, 1, 1),
    background: theme.palette.common.white,
    borderRadius: 1.6,
    display: 'flex',
    flexDirection: 'column',
    gap: 1.5,
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    svg: {
      width: 15,
      height: 15,
      margin: 0.1875,
      color: theme.palette.grey[200],
    },
  },
  titleWrapper: {
    display: 'flex',
    gap: 0.5,
    [`& .${typographyClasses.root}`]: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '16.94px',
    },
  },
  onlineColor: {
    color: theme.palette.primary[900],
  },
  greyColor: {
    color: theme.palette.grey[200],
  },
  contentContainer: {
    background: alpha(theme.palette.grey[400], 0.8),
    borderRadius: 0.8,
    height: 352,
    padding: 3,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  friend: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    [`& .${typographyClasses.root}`]: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '20px',
    },
    [`& .${typographyClasses.subtitle1}`]: {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: '14px',
      color: theme.palette.primary[900],
    },
  },
  friendTextWrapper: {
    flexGrow: 2,
    wordBreak: 'break-word',
  },
  arrow: {
    width: 20,
    height: 20,
    color: theme.palette.grey[200],
  },
} as const;

export default styles;
