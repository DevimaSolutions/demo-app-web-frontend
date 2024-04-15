import { alpha } from '@mui/material';

import { theme } from '@/constants';

const styles = {
  root: {
    background: theme.palette.common.white,
    p: theme.spacing(2, 3, 2, 2),
    borderRadius: 0.8,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
    background: alpha(theme.palette.primary[700], 0.1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    width: '100%',
    flex: 1,
  },
  progressInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
    fontFamily: 'Inter',
  },
  percentage: {
    fontSize: 12,
    lineHeight: '20px',
    fontWeight: 600,
    fontFamily: 'Inter',
    opacity: 0.4,
  },
  progress: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 0.25,
    mt: 0.5,
  },
  activeProgress: (width: number) => ({
    background: theme.palette.primary[700],
    height: 4,
    borderRadius: 2,
    width: `${width}%`,
  }),
  idleProgress: (width: number) => ({
    background: theme.palette.grey[700],
    height: 4,
    borderRadius: 2,
    width: `${width}%`,
  }),
} as const;
export default styles;
