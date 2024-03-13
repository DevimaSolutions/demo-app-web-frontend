import { theme } from '@/constants';

const styles = {
  toastContainer: {
    width: 'auto',
  },
  toast: {
    padding: theme.spacing(1.75, 2.5, 1.75, 2),
    borderRadius: 1,
    boxShadow: 'none',
    minHeight: 'auto',
  },
  toastBody: {
    margin: 0,
    padding: 0,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: '20px',
    fontFamily: 'Poppins',
    color: theme.palette.common.white,
  },
} as const;

export default styles;
