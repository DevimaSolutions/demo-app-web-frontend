import {
  alpha,
  buttonBaseClasses,
  dialogContentClasses,
  inputClasses,
  inputLabelClasses,
  paperClasses,
  typographyClasses,
} from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    [`& .${paperClasses.root}`]: {
      height: 404,
    },
    [`& .${dialogContentClasses.root}`]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  topPart: {
    padding: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarNameWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 2.5,
  },
  userNamesWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.25,
    [`& .${typographyClasses.subtitle2}`]: {
      lineHeight: '24px',
      color: alpha(theme.palette.text.primary, 0.7),
    },
  },
  nameWrapper: {
    display: 'flex',
    gap: 1,
  },
  shareButton: {
    [`&.${buttonBaseClasses.root}`]: {
      background: theme.palette.common.white,
      color: theme.palette.primary[900],
      padding: 0.625,
      minWidth: 3,
      borderRadius: 0.4,
      svg: {
        width: 14,
        height: 14,
      },
    },
  },
  signOutButton: {
    flexShrink: 0,
    width: 48,
    height: 48,
    svg: {
      width: 32,
      height: 32,
    },
  },
  bottomPart: {
    borderRadius: 3.2,
    backgroundColor: theme.palette.common.white,
    flexGrow: 2,
    padding: theme.spacing(2, 5, 5),
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  inputGrid: {
    display: 'grid',
    gridTemplateColumns: '313px 313px',
    gridColumnGap: 32,
    gridRowGap: 20,
    [`& .${inputClasses.root}`]: {
      ':before': {
        borderBottom: `1px solid ${theme.palette.grey[700]}`,
      },
      '&:hover:not(.Mui-disabled, .Mui-error):before': {
        borderBottom: `2px solid ${theme.palette.grey[700]}`,
      },
      '&:hover': {
        cursor: 'default',
      },
    },
    [`& .${inputClasses.input}`]: {
      '&:hover': {
        cursor: 'default',
        color: theme.palette.text.primary,
      },
      fontWeight: 500,
      fontSize: 18,
      lineHeight: '24px',
    },
    [`& .${inputLabelClasses.root}`]: {
      color: alpha(theme.palette.text.primary, 0.4),
      fontWeight: 500,
      fontSize: 12,
      lineHeight: '16px',
    },
  },
  editEndAdornment: {
    width: 20,
    height: 20,
    svg: {
      color: theme.palette.primary[900],
      width: 15,
      height: 15,
    },
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
} as const;

export default styles;
