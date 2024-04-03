import { alpha, buttonClasses, typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(3, 3, 3, 0.75),
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
    padding: theme.spacing(0, 0.5, 0, 2.25),
    gap: 0.5,
    [`& .${typographyClasses.root}`]: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: '24px',
    },
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
    height: 240,
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
  },
  friendTextWrapper: {
    flexGrow: 2,
    wordBreak: 'break-word',
  },
  addFriendButton: {
    [`&.${buttonClasses.root}`]: {
      background: alpha(theme.palette.primary[900], 0.1),
      color: theme.palette.primary[900],
      padding: theme.spacing(1.5, 2.25),
      borderRadius: 1.6,
      height: 32,
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '20px',
    },
  },
  number: {
    [`&.${typographyClasses.subtitle1}`]: {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '20px',
    },
  },
  nickname: {
    [`&.${typographyClasses.subtitle1}`]: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: '14px',
    },
  },
} as const;

export default styles;
