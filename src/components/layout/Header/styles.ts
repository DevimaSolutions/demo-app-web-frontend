import { theme } from '@/constants';

const styles = {
  appBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
    top: 0,
    bottom: 0,
    right: 'calc(100% - 96px)',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
  },
} as const;

export default styles;
