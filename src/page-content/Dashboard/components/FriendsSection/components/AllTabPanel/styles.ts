import { typographyClasses } from '@mui/material';

const styles = {
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
    marginTop: '24px',
    padding: '0px 0px 8px 16px',
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
