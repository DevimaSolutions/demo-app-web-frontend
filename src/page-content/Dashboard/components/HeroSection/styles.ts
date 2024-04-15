import { theme } from '@/constants';

const styles = {
  root: (backgroundImage: string) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    borderRadius: 1.6,
    overflow: 'hidden',
    position: 'relative',
    p: 4,
  }),
  title: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 700,
    letterSpacing: '5%',
    color: theme.palette.common.white,
    opacity: 0.4,
  },
  gameName: {
    fontSize: 32,
    lineHeight: '40px',
    fontWeight: 600,
    color: theme.palette.common.white,
    mt: 0.25,
  },
  infoBlock: {
    mt: 2.5,
    background: theme.palette.common.white,
    borderRadius: 1.2,
    p: 0.5,
    width: 290,
  },
  infoBlockTitle: {
    fontSize: 12,
    lineHeight: '16px',
    fontWeight: 500,
    opacity: 0.4,
    ml: 1,
    mt: 0.75,
    fontFamily: 'Inter',
  },
  rewardBlock: {
    ml: 1,
    mt: 1,
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  rewardElement: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.75,
  },
  rewardText: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 500,
    letterSpacing: '-2%',
  },
  playButton: {
    mt: 2,
    borderRadius: '4px 4px 8px 8px',
    fontWeight: 600,
  },
} as const;

export default styles;
