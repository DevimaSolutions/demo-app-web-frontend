import { theme } from '@/constants';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
  },
  name: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
    color: theme.palette.grey[600],
  },
  newProgress: {
    background: '#1614191A',
    color: '#16141966',
    borderRadius: 1.1,
    px: 0.75,
    fontSize: 12,
    lineHeight: '20px',
    fontWeight: 600,
  },
  progressContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
    borderRadius: 3.2,
    overflow: 'hidden',
    mt: 0.5,
  },
  progressSegment: {
    borderRadius: 0.2,
    height: 12,
    transition: 'all 0.5s ease-in',
  },
  oldSegment: (color: string, progress: number) => ({
    background: color,
    width: `${progress}%`,
    opacity: 0.4,
  }),
  newSegment: (color: string, progress: number) => ({
    background: color,
    width: `${progress}%`,
  }),
  unusedSegment: (progress: number) => ({
    background: theme.palette.grey[400],
    width: `${progress}%`,
  }),
  statistic: {
    fontSize: 14,
    lineHeight: '20px',
    fontWeight: 500,
    color: '#16141966',
  },
} as const;

export default styles;
