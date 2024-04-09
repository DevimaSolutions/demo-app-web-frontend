import { dialogContentClasses, paperClasses } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    [`& .${paperClasses.root}`]: {
      height: 'unset',
      width: 'unset',
      p: theme.spacing(2.5, 1, 3),
    },
    [`& .${dialogContentClasses.root}`]: {
      background: theme.palette.common.white,
    },
  },
  title: {
    fontSize: 20,
    lineHeight: '20px',
    fontWeight: 500,
    ml: 2,
  },
  qrCode: {
    mt: 2.5,
  },
  exitIcon: {
    position: 'absolute',
    top: 18,
    right: 24,
    cursor: 'pointer',
  },
  profileSection: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    mt: 2.5,
    ml: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    color: theme.palette.primary[500],
    svg: {
      width: 45,
      height: 45,
      alignSelf: 'end',
    },
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 0.5,
  },
  userName: {
    fontSize: 18,
    lineHeight: '20px',
    fontWeight: 600,
    fontFamily: 'Inter',
  },
  userNickName: {
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 600,
    fontFamily: 'Inter',

    opacity: 0.6,
  },
} as const;

export default styles;
