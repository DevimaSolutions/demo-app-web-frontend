import { theme } from '@/constants';

const styles = {
  root: (isError?: boolean) => ({
    position: 'relative',
    '.character': {
      width: 68,
      height: 80,
      background: theme.palette.common.white,
      borderRadius: 0.8,
      color: isError ? theme.palette.error.main : 'rgba(144, 140, 151, 0.4)',
      lineHeight: '82px',
      border: `1.5px solid ${isError ? theme.palette.error.main : theme.palette.common.white}`,
      outline: isError ? '2px solid rgba(255, 101, 101, 0.3)' : 0,
    },
    '.container': {
      height: 80,
    },
    '.character--selected': {
      border: `1.5px solid ${isError ? theme.palette.error.main : theme.palette.primary[900]}`,
      outline: `2px solid ${isError ? 'rgba(255, 101, 101, 0.3)' : 'rgba(134, 116, 219, 0.1)'}`,
    },
    '.character--filled': {
      color: '#2C2535',
      fontSize: 24,
      fontWeight: 600,
      border: `1.5px solid ${isError ? theme.palette.error.main : theme.palette.common.white}`,
      outline: isError ? '2px solid rgba(255, 101, 101, 0.3)' : 0,
    },
  }),
  errorBox: {
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 'calc(100% + 8px)',
  },
  errorText: {
    color: theme.palette.error.main,
    fontSize: 12,
    lineHeight: 1.5,
    fontWeight: 500,
  },
} as const;

export default styles;
