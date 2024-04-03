import { theme } from '@/constants';

const styles = {
  root: {
    width: '100%',
    borderRadius: '16px 16px 43px 16px',
    overflow: 'hidden',
    position: 'relative',
  },
  infoSection: {
    p: '8px 8px 8px 20px',
    position: 'absolute',
    background: theme.palette.common.white,
    bottom: 8,
    left: 8,
    right: 8,
    borderRadius: '8px 50px 50px 8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 239,
    ['img']: {
      objectFit: 'cover',
    },
  },
  title: {
    fontSize: 18,
    lineHeight: '24px',
    fontWeight: 600,
  },
  subTitle: {
    fontSize: 14,
    lineHeight: '18px',
    fontWeight: 400,
  },
  playButton: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: theme.palette.primary[200],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    position: 'relative',
    overflow: 'hidden',
    color: theme.palette.common.white,
    cursor: 'pointer',
    [':after']: {
      content: "''",
      background: theme.palette.primary[700],
      width: 72,
      height: 72,
      borderRadius: '50%',
      top: 22,
      left: 14,
      position: 'absolute',
      filter: 'blur(54px)',
      zIndex: 1,
    },
  },
  icon: {
    zIndex: 2,
  },
} as const;

export default styles;
