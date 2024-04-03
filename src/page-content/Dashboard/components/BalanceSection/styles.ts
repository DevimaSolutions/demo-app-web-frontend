import { theme } from '@/constants';

const styles = {
  root: {
    display: 'flex',
    gap: 1.5,
    width: '100%',
  },
  sectionBox: {
    width: '100%',
    background: theme.palette.common.white,
    p: 0.5,
    borderRadius: 0.8,
    display: 'flex',
    alignItems: 'center',
  },
  iconContainer: (color: string) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
    borderRadius: '6px 2px 2px 6px',
    background: color,
    mr: 1,
  }),
  innerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: 600,
  },
  actionButton: {
    background: theme.palette.primary[700],
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2px 6px 6px 2px',
    cursor: 'pointer',
  },
} as const;

export default styles;
