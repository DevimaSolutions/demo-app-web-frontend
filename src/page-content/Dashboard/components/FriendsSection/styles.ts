import { alpha, buttonClasses, typographyClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    width: '100%',
    height: 628,
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
          marginLeft: 2,
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
  addFriendButton: {
    [`&.${buttonClasses.root}`]: {
      background: theme.palette.primary[900],
      color: theme.palette.common.white,
      padding: theme.spacing(0.5, 1.5, 0.625),
      borderRadius: 1.6,
      height: 24,
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '14.52px',
      textTransform: 'uppercase',
    },
  },
  tabs: {
    marginLeft: 2,
  },
} as const;

export default styles;
