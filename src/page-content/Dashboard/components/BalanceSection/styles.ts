import { alpha } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    background: theme.palette.common.white,
    padding: theme.spacing(2.75, 2.75, 2.75, 3),
    borderRadius: 1.6,
  },
  innerBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: 0.5,
    fontSize: 14,
    lineHeight: '17px',
    fontWeight: 500,
    color: alpha(theme.palette.text.primary, 0.4),
  },
  countContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    fontSize: 24,
    lineHeight: '24px',
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
  actionButton: {
    background: theme.palette.primary[900],
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0.4,
    cursor: 'pointer',
    svg: {
      width: 11,
      height: 11,
    },
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: alpha(theme.palette.common.rubies, 0.2),
    color: theme.palette.common.rubies,
    svg: {
      width: 27,
      height: 25,
    },
  },
} as const;

export default styles;
