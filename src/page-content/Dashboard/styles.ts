import { theme } from '@/constants';

const styles = {
  root: {
    p: 5,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: theme.spacing(84.375, 40.625),
    gap: 3,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    lineHeight: '48px',
    fontWeight: 400,
    b: {
      fontWeight: 600,
    },
  },
  leftTable: {
    width: 675,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,

    minWidth: 0,
    height: '100%',
    overflowY: 'auto',
  },
  rightTable: {
    width: 325,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,

    position: 'sticky',
    top: 40,
    height: 'min-content',
    overflow: 'hidden',
  },
  rowContainer: {
    display: 'flex',
    gap: 4,
    width: '100%',
  },
  userContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
  },
  eliteBadge: {
    p: theme.spacing(0.75, 1, 0.75, 0.75),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 0.5,
    background: theme.palette.grey[600],
    color: theme.palette.common.white,
    fontSize: 20,
    lineHeight: '20px',
    fontWeight: 500,
    borderRadius: 0.8,
  },
} as const;

export default styles;
