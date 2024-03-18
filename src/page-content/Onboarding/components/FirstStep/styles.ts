import { theme } from '@/constants';

const styles = {
  root: {
    width: 480,
    p: theme.spacing(6, 5),
    gap: 4,
  },
  titleBox: {
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    lineHeight: '32px',
    fontWeight: 500,
  },
} as const;

export default styles;
