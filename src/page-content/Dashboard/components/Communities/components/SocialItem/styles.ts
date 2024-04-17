import { theme } from '@/constants';

const styles = {
  wrapper: {
    ['a']: {
      textDecoration: 'none',
    },
  },
  root: {
    height: 119,
    width: 156,
    background: theme.palette.grey[500],
    borderRadius: 1.6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 0.5,
    color: theme.palette.primary[900],
    position: 'relative',
  },
  text: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
  socialLinkIcon: {
    position: 'absolute',
    top: 6,
    right: 9,
    color: theme.palette.grey[200],
  },
} as const;

export default styles;
