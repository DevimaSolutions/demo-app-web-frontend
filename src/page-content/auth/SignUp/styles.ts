import { theme } from '@/constants';

const styles = {
  root: {
    width: 714,
    height: 825,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '25px',
    margin: '10px 0',
  },
  container: {
    width: 456,
    height: 'auto',
    borderRadius: 3.2,
    padding: '24px 23px',
    border: `1.5px solid ${theme.palette.common.white}`,
    background: 'rgba(255,255,255, 0.4)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  titleIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '32px',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '0 42px',
    gap: '8px',
  },
  socialsWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '20px',
    width: '100%',
  },
  buttonWrapper: {
    display: 'flex',
    gap: '12px',
    width: '100%',
  },
  bottomLinks: {
    display: 'flex',
    gap: '4px',
  },
} as const;

export default styles;
