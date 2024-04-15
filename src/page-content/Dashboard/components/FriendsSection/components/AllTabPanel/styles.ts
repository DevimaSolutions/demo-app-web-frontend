import { alpha, inputBaseClasses, outlinedInputClasses, typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    ['& .infinite-scroll-component__outerdiv']: {
      height: '100%',
    },
  },
  loadingWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendsWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    gap: '16px',
    paddingLeft: theme.spacing(0.5),
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
  },
  friendTextWrapper: {
    flexGrow: 2,
    wordBreak: 'break-word',
  },
  number: {
    [`&.${typographyClasses.subtitle1}`]: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '20px',
      color: alpha(theme.palette.text.primary, 0.2),
    },
  },
  username: {
    [`&.${typographyClasses.subtitle1}`]: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '14px',
    },
  },
  searchInput: {
    padding: theme.spacing(0, 0, 0, 2.5),
    [`& .${inputBaseClasses.root}.${outlinedInputClasses.root}`]: {
      backgroundColor: theme.palette.common.white,
    },
  },
  noResults: {
    pl: 3,
  },
} as const;

export default styles;
