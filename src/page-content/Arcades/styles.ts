import { theme } from '@/constants';

const styles = {
  root: {
    pt: 5,
    pb: 5,
    maxWidth: 1024,
    margin: 'auto',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: theme.spacing(83.75, 41.875),
    gap: 2.25,
    justifyContent: 'center',
    mt: 4,
  },
  leftTable: {
    width: 670,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,

    // minWidth: 0,
    // height: '100%',
    // overflowY: 'auto',
  },
  rightTable: {
    width: 335,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,

    // position: 'sticky',
    // top: 40,
    // height: 'min-content',
    // overflow: 'hidden',
  },
} as const;

export default styles;
