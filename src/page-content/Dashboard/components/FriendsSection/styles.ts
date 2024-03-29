import { alpha, buttonClasses, typographyClasses } from '@mui/material';

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
    [`& .${typographyClasses.subtitle2}`]: {
      color: alpha(theme.palette.text.primary, 0.4),
    },
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
  contentContainer: (isFriends: boolean) => ({
    ...(isFriends
      ? {}
      : {
          background: alpha(theme.palette.grey[400], 0.6),
          borderRadius: 0.8,
          alignItems: 'center',
          justifyContent: 'center',
        }),
    height: 421,
    display: 'flex',
    flexDirection: 'column',
    gap: 2.25,
  }),
  loadingWrapper: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  friendsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    gap: '16px',
    marginTop: '6px',
    padding: '0px 16px 8px',
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
  addFriendButton: {
    [`&.${buttonClasses.root}`]: {
      background: alpha(theme.palette.primary[900], 0.1),
      color: theme.palette.primary[900],
      padding: theme.spacing(1.5, 4),
    },
  },
} as const;

export default styles;
